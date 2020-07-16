import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { useData } from '../../hooks/data';

import {
  Container,
  Header,
  HeaderItems,
  Card,
  CardTitle,
  Back,
  Title,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

interface RouteParams {
  colors: [];
}

const AddAddressFinish: React.FC = () => {
  const { colors } = useRoute().params as RouteParams;
  const { reset, goBack } = useNavigation();

  const [address, setAddress] = useState('');

  const { addAddress } = useData();

  const handleAddAddress = async () => {
    if (address.length <= 5 || address.length >= 80) return;

    await addAddress({
      address,
      coinImage: 'https://bitcoin.org/img/icons/opengraph.png?1594728624',
      coinName: 'BTC',
    });

    reset({ routes: [{ name: 'Dashboard' }], index: 0 });
  };

  return (
    <Container>
      <Header colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <SafeAreaView>
          <HeaderItems>
            <Back onPress={() => goBack()}>
              <Ionicons name="ios-arrow-round-back" size={32} color="white" />
            </Back>
            <Title>Add account</Title>
          </HeaderItems>
        </SafeAreaView>
      </Header>
      <Card>
        <CardTitle>Details</CardTitle>
        <Input
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
        />
        <Button containerStyle={{ marginTop: 20 }} onPress={handleAddAddress}>
          Add account
        </Button>
      </Card>
      <StatusBar style="light" backgroundColor="transparent" animated />
    </Container>
  );
};

export default AddAddressFinish;
