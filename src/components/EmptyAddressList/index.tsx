import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, Image } from './styles';

import Graphic from '../../assets/Graphic.png';

import Button from '../Button';

const EmptyAddressList: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>You don&apos;t have any address.{'\n'}Add a new one.</Text>
      <Image source={Graphic} resizeMode="contain" />
      <Button onPress={() => navigate('AddAddressSelect')}>Add account</Button>
    </Container>
  );
};

export default EmptyAddressList;
