import React, { useEffect, useRef } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container } from './styles';

import { useData } from '../../hooks/data';

import Header from '../../components/Header';
import EmptyAddressList from '../../components/EmptyAddressList';
import AddressCard from '../../components/AddressCard';

const Dashboard: React.FC = () => {
  const { addresses, loadingBalances } = useData();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fcfcff' }}>
      <Container>
        <Header />
        <FlatList
          data={addresses}
          keyExtractor={item => item.address}
          ListEmptyComponent={<EmptyAddressList />}
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

export default Dashboard;
