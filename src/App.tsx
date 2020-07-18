import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla';
import * as SplashScreen from 'expo-splash-screen';
import * as Sentry from 'sentry-expo';

import Routes from './routes';
import AppProvider from './hooks';

Sentry.init({
  dsn:
    'https://f8ba47e5b33e403e9317fa48d6e03458@o275815.ingest.sentry.io/5342803',
});

export default function App(): JSX.Element {
  const [loaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold,
  });

  useEffect(() => {
    async function avoidSplashScreenHiding() {
      await SplashScreen.preventAutoHideAsync();
    }

    avoidSplashScreenHiding();
  }, []);

  if (!loaded) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
