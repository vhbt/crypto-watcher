import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import Dashboard from '../pages/Dashboard';
import AddAddressSelect from '../pages/AddAddressSelect';
import AddAddressFinish from '../pages/AddAddressFinish';

import { useData } from '../hooks/data';
import { useDarkMode } from '../hooks/darkMode';
import { light, dark } from '../constants/theme';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const { loaded } = useData();
  const { isDarkMode } = useDarkMode();

  if (!loaded) {
    return <View />;
  }

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <App.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <App.Screen name="Dashboard" component={Dashboard} />
        <App.Screen name="AddAddressSelect" component={AddAddressSelect} />
        <App.Screen name="AddAddressFinish" component={AddAddressFinish} />
      </App.Navigator>
      <StatusBar
        style={isDarkMode ? 'light' : 'dark'}
        backgroundColor="transparent"
        animated
      />
    </ThemeProvider>
  );
};

export default Routes;
