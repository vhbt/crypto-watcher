import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from 'react-native';
import api from '../services/api';

interface Address {
  address: string;
  confirmed?: number;
  unconfirmed?: number;
  coinImage: string;
  coinName: string;
}

interface DataState {
  addresses: Address[];
}

interface DataProviderData {
  addresses: Address[];
  loaded: boolean;
  loadingBalances: boolean;
  addAddress(data: Address): Promise<void>;
  updateAddressAmount(address: Address[]): Promise<void>;
  deleteAddress(address: string): Promise<void>;
}

interface ResponseAddressData {
  addr: string;
  confirmed: number;
  unconfirmed: number;
}

const DataContext = createContext({} as DataProviderData);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as DataState);
  const [loaded, setLoaded] = useState(false);
  const [loadingBalances, setLoadingBalances] = useState(false);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const dataStored = await AsyncStorage.getItem('@cryptowatcher:data');

      if (dataStored) {
        setData(JSON.parse(dataStored));
      }

      setLoaded(true);
    }

    loadStorageData();
  }, []);

  const updateAddressAmount = useCallback(async (addresses: Address[]) => {
    try {
      setLoadingBalances(true);
      const addressesQueryData = addresses.reduce((query, address) => {
        return `${query} ${address.address} `;
      }, '');

      const response = await api.post('/balance', {
        addr: addressesQueryData,
      });

      const addressesUpdated = response.data.response.map(
        ({ addr, confirmed, unconfirmed }: ResponseAddressData) => {
          return {
            address: addr,
            confirmed,
            unconfirmed,
          };
        },
      );

      setData(oldData => {
        return {
          ...oldData,
          addresses: [
            ...oldData.addresses.map(address => {
              return {
                ...address,
                ...addressesUpdated.find(
                  (adr: { address: string }) => adr.address === address.address,
                ),
              };
            }),
          ],
        };
      });
      setLoadingBalances(false);
    } catch (error) {
      Alert.alert(
        'Fail',
        'The balance refresh failed, probably because you did more than 2 requests per second.',
      );
    }
  }, []);

  const addAddress = async ({ address, coinName, coinImage }: Address) => {
    setData(oldData => {
      return {
        ...oldData,
        addresses: [
          ...(oldData.addresses || []),
          { address, coinImage, coinName, confirmed: 0, unconfirmed: 0 },
        ],
      };
    });
  };

  const deleteAddress = async (address: string) => {
    setData(oldData => {
      return {
        ...oldData,
        addresses: [
          ...oldData.addresses.filter(addr => addr.address !== address),
        ],
      };
    });
  };

  useEffect(() => {
    async function syncStorageWithState() {
      await AsyncStorage.setItem('@cryptowatcher:data', JSON.stringify(data));
    }

    syncStorageWithState();
  }, [data]);

  return (
    <DataContext.Provider
      value={{
        addresses: data.addresses || [],
        loaded,
        addAddress,
        updateAddressAmount,
        deleteAddress,
        loadingBalances,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

function useData(): DataProviderData {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }

  return context;
}

export { DataProvider, useData };
