import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Text } from './styles';

import Graphic from '../../assets/Graphic.svg';

import Button from '../Button';

const EmptyAddressList: React.FC = () => {
  const { navigate } = useNavigation();

  const { width, height } = Dimensions.get('window');

  return (
    <Container>
      <Text>You don&apos;t have any address.{'\n'}Add a new one.</Text>
      <Graphic width={width * 0.4} height={height * 0.4} />
      <Button onPress={() => navigate('SelectAddAddress')}>Add account</Button>
    </Container>
  );
};

export default EmptyAddressList;
