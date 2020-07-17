import React, { useCallback } from 'react';
import { View } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import { useData } from '../../hooks/data';
import { useDarkMode } from '../../hooks/darkMode';

import { Container, Text, IconButton } from './styles';

const Header: React.FC = () => {
  const { navigate } = useNavigation();
  const { addresses, updateAddressAmount, loadingBalances } = useData();
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  const theme = useTheme();

  const handleUpdateAddresses = useCallback(() => {
    if (!loadingBalances) {
      updateAddressAmount(addresses);
    }
  }, []);

  return (
    <Container>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Addresses</Text>
        <IconButton onPress={() => toggleDarkMode()} style={{ marginLeft: 10 }}>
          <Feather
            name={isDarkMode ? 'sun' : 'moon'}
            size={24}
            color={theme.colors.primary}
          />
        </IconButton>
      </View>
      <View style={{ flexDirection: 'row' }}>
        {addresses.length > 0 ? (
          <IconButton
            onPress={handleUpdateAddresses}
            style={{ marginRight: 20 }}
          >
            <AntDesign name="sync" size={24} color={theme.colors.primary} />
          </IconButton>
        ) : null}
        <IconButton onPress={() => navigate('AddAddressSelect')}>
          <AntDesign
            name="pluscircleo"
            size={24}
            color={theme.colors.primary}
          />
        </IconButton>
      </View>
    </Container>
  );
};

export default Header;
