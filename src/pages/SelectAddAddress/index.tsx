import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Container, Title, CancelText, CancelButton } from './styles';

import { useData } from '../../hooks/data';

import AddAccountCard from '../../components/AddAccountCard';

const SelectAddAddress: React.FC = () => {
  const [address, setAddress] = useState('');
  const { reset, goBack, navigate } = useNavigation();

  const { addAddress } = useData();

  const handleAddAddress = async () => {
    if (address.length <= 5) return;

    await addAddress({
      address,
      coinImage: 'https://bitcoin.org/img/icons/opengraph.png?1594728624',
      coinName: 'BTC',
    });

    reset({ routes: [{ name: 'Dashboard' }], index: 0 });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFF' }}>
      <Container>
        <CancelButton onPress={() => goBack()}>
          <CancelText>Cancel</CancelText>
        </CancelButton>
        <Title>Add address</Title>
        <AddAccountCard
          title="Bitcoin Address"
          description="Setup an unique Bitcoin address to track its value over time."
          image="https://s2.glbimg.com/HEbW5ZxGZNs7UJeMNs6Pp5m2EKQ=/0x600/s.glbimg.com/po/tt2/f/original/2016/03/22/bitcoin-btc-symbol-d75950754.png"
          onPress={() =>
            navigate('AddAddress', {
              type: 'BTC',
              colors: ['#6D63EF', '#A1A3FF'],
            })
          }
        />
      </Container>
    </SafeAreaView>
  );
};

export default SelectAddAddress;
