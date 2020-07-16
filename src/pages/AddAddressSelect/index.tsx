import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, CancelText, CancelButton } from './styles';

import AddAddressCard from '../../components/AddAddressCard';

const AddAddressSelect: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FCFCFF' }}>
      <Container>
        <CancelButton onPress={() => goBack()}>
          <CancelText>Cancel</CancelText>
        </CancelButton>
        <Title>Add address</Title>
        <AddAddressCard
          title="Bitcoin Address"
          description="Setup an unique Bitcoin address to track its value over time."
          image="https://s2.glbimg.com/HEbW5ZxGZNs7UJeMNs6Pp5m2EKQ=/0x600/s.glbimg.com/po/tt2/f/original/2016/03/22/bitcoin-btc-symbol-d75950754.png"
          onPress={() =>
            navigate('AddAddressFinish', {
              type: 'BTC',
              colors: ['#6D63EF', '#A1A3FF'],
            })
          }
        />
      </Container>
    </SafeAreaView>
  );
};

export default AddAddressSelect;
