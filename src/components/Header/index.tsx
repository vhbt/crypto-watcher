import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Text, AddButton } from './styles';

const Header: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>Accounts</Text>
      <AddButton onPress={() => navigate('AddAddress')}>
        <AntDesign name="plus" size={24} color="black" />
      </AddButton>
    </Container>
  );
};

export default Header;
