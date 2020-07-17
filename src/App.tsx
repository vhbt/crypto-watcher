import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla';

import Routes from './routes';
import AppProvider from './hooks';

export default function App(): JSX.Element {
  useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
