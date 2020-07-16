import React, { useCallback } from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useData } from '../../hooks/data';

import { Container, Text, AddButton } from './styles';

const Header: React.FC = () => {
  const { navigate } = useNavigation();
  const { addresses, updateAddressAmount, loadingBalances } = useData();

  const handleUpdateAddresses = useCallback(() => {
    if (!loadingBalances) {
      updateAddressAmount(addresses);
    }
  }, []);

  return (
    <Container>
      <Text>Addresses</Text>
      <View style={{ flexDirection: 'row' }}>
        <AddButton onPress={handleUpdateAddresses} style={{ marginRight: 20 }}>
          <AntDesign name="sync" size={24} color="black" />
        </AddButton>
        <AddButton onPress={() => navigate('AddAddressSelect')}>
          <AntDesign name="pluscircleo" size={24} color="black" />
        </AddButton>
      </View>
    </Container>
  );
};

export default Header;
