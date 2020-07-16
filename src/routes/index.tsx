import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';

import Dashboard from '../pages/Dashboard';
import SelectAddAddress from '../pages/SelectAddAddress';
import AddAddress from '../pages/AddAddress';

import { useData } from '../hooks/data';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const { loaded } = useData();

  if (!loaded) {
    const preventAutoHide = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    preventAutoHide();
  } else {
    const hideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };

    hideSplashScreen();
  }

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="SelectAddAddress" component={SelectAddAddress} />
      <App.Screen name="AddAddress" component={AddAddress} />
    </App.Navigator>
  );
};

export default Routes;
