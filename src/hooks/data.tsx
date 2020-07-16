import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

interface Address {
  address: string;
  amount?: string;
  coinImage: string;
  coinName: string;
}

interface DataState {
  addresses: Address[];
}

interface DataProviderData {
  addresses: Address[];
  loaded: boolean;
  addAddress(data: Address): Promise<void>;
  updateAddressAmount(address: string): Promise<void>;
}

const DataContext = createContext({} as DataProviderData);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({} as DataState);
  const [loaded, setLoaded] = useState(false);

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

  const updateAddressAmount = useCallback(async (address: string) => {
    try {
      const response = await api.get(`address/${address}`);
      const { funded_txo_sum, spent_txo_sum } = response.data.chain_stats;

      const balance = String((funded_txo_sum - spent_txo_sum) / 100000000);

      setData(oldData => {
        return {
          ...oldData,
          addresses: [
            ...oldData.addresses.map(entry => {
              return {
                ...entry,
                amount: entry.address === address ? balance : entry.amount,
              };
            }),
          ],
        };
      });

      await AsyncStorage.setItem(
        '@cryptowatcher:data',
        JSON.stringify({
          ...data,
          addresses: [
            ...data.addresses.map(entry => {
              return {
                ...entry,
                amount: entry.address === address ? balance : entry.amount,
              };
            }),
          ],
        }),
      );
    } catch (error) {
      //
    }
  }, []);

  const addAddress = async ({ address, coinName, coinImage }: Address) => {
    setData(oldData => ({
      ...oldData,
      addresses: [
        ...(oldData.addresses || []),
        { address, amount: '0', coinImage, coinName },
      ],
    }));

    await AsyncStorage.setItem(
      '@cryptowatcher:data',
      JSON.stringify({
        ...data,
        addresses: [
          ...(data.addresses || []),
          { address, amount: '0', coinImage, coinName },
        ],
      }),
    );
  };

  return (
    <DataContext.Provider
      value={{
        addresses: data.addresses || [],
        loaded,
        addAddress,
        updateAddressAmount,
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
