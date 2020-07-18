import React, { useState, useEffect, useContext, createContext } from 'react';
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
  apiKey: string;
}

interface DataProviderData {
  addresses: Address[];
  apiKey: string;
  loadedData: boolean;
  loadingBalances: boolean;
  addAddress(data: Address): Promise<void>;
  updateAddressAmount(address: Address[]): Promise<void>;
  deleteAddress(address: string): Promise<void>;
  setApiKey(apiKey: string): Promise<void>;
}

interface ResponseAddressData {
  addr: string;
  confirmed: number;
  unconfirmed: number;
}

const DataContext = createContext({} as DataProviderData);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as DataState);
  const [loadedData, setLoadedData] = useState(false);
  const [loadingBalances, setLoadingBalances] = useState(false);
  let updatedData = {} as DataState;

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const dataStored = await AsyncStorage.getItem('@cryptowatcher:data');

      if (dataStored) {
        const parsed = JSON.parse(dataStored);
        updatedData = parsed;

        api.defaults.headers.Authorization = `Bearer ${parsed.apiKey}`;

        setData(parsed);
      }

      setLoadedData(true);
    }

    loadStorageData();
  }, []);

  const updateAddressAmount = async (addresses: Address[]) => {
    try {
      if (!data.apiKey && !updatedData.apiKey) return;
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
        AsyncStorage.setItem(
          '@cryptowatcher:data',
          JSON.stringify({
            ...oldData,
            addresses: [
              ...oldData.addresses.map(address => {
                return {
                  ...address,
                  ...addressesUpdated.find(
                    (adr: { address: string }) =>
                      adr.address === address.address,
                  ),
                };
              }),
            ],
          }),
        );

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
      if (
        error.response.data.message === 'This function requires you to login'
      ) {
        Alert.alert(
          'Fail',
          'The balance request failed because your API key is empty or is invalid.',
        );
      } else {
        Alert.alert(
          'Fail',
          'The balance request failed, probably because of too many requests. Please wait a few seconds.',
        );
      }
      setLoadingBalances(false);
    }
  };

  const addAddress = async ({ address, coinName, coinImage }: Address) => {
    setData(oldData => {
      AsyncStorage.setItem(
        '@cryptowatcher:data',
        JSON.stringify({
          ...oldData,
          addresses: [
            ...(oldData.addresses || []),
            { address, coinImage, coinName, confirmed: 0, unconfirmed: 0 },
          ],
        }),
      );

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
      AsyncStorage.setItem(
        '@cryptowatcher:data',
        JSON.stringify({
          ...oldData,
          addresses: [
            ...oldData.addresses.filter(addr => addr.address !== address),
          ],
        }),
      );

      return {
        ...oldData,
        addresses: [
          ...oldData.addresses.filter(addr => addr.address !== address),
        ],
      };
    });
  };

  const setApiKey = async (apiKey: string) => {
    setData(oldData => {
      AsyncStorage.setItem(
        '@cryptowatcher:data',
        JSON.stringify({
          ...oldData,
          apiKey,
        }),
      );

      api.defaults.headers.Authorization = `Bearer ${apiKey}`;

      return {
        ...oldData,
        apiKey,
      };
    });
  };

  return (
    <DataContext.Provider
      value={{
        addresses: data.addresses || [],
        apiKey: data.apiKey,
        loadedData,
        addAddress,
        updateAddressAmount,
        deleteAddress,
        loadingBalances,
        setApiKey,
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
