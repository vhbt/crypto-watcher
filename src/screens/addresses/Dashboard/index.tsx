import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { SafeAreaView, Container, NoApiKeyView, NoApiKeyText } from './styles';

import { useData } from '../../../hooks/data';

import Header from '../../../components/Header';
import EmptyAddressList from '../../../components/EmptyAddressList';
import AddressCard from '../../../components/AddressCard';

const AddressesDashboard: React.FC = () => {
  const { addresses, updateAddressAmount, loadingBalances, apiKey } = useData();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && addresses.length > 0 && apiKey) {
      updateAddressAmount(addresses);
    }
  }, [isFocused]);

  return (
    <SafeAreaView>
      <Container>
        <Header />
        <FlatList
          data={addresses}
          keyExtractor={item => item.address}
          ListEmptyComponent={<EmptyAddressList />}
          ListFooterComponent={
            !apiKey ? (
              <NoApiKeyView>
                <NoApiKeyText>
                  P.S: You need to setup a Blockonomics API key on
                  &rdquo;Settings&rdquo; to be able to see and refresh your
                  balances.
                </NoApiKeyText>
              </NoApiKeyView>
            ) : null
          }
          style={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => {
            return (
              <AddressCard
                address={item.address}
                amount={item.confirmed}
                coinImage={item.coinImage}
                coinName={item.coinName}
                loading={loadingBalances}
              />
            );
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default AddressesDashboard;
