import React, { useEffect, useRef } from 'react';
import { View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { Container } from './styles';

import { useData } from '../../hooks/data';

import Header from '../../components/Header';
import EmptyAddressList from '../../components/EmptyAddressList';
import AddressCard from '../../components/AddressCard';

const Dashboard: React.FC = () => {
  const { addresses, updateAddressAmount } = useData();
  // const addressesRef = useRef(addresses);

  // useEffect(() => {
  //   addressesRef.current.forEach(async entry => {
  //     updateAddressAmount(entry.address);
  //   });
  // }, [addressesRef, updateAddressAmount]);

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
                amount={item.amount}
                coinImage={item.coinImage}
                coinName={item.coinName}
              />
            );
          }}
        />
      </Container>
    </SafeAreaView>
  );
};

export default Dashboard;
