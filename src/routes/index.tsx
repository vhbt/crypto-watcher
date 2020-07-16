import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import AddAddressSelect from '../pages/AddAddressSelect';
import AddAddressFinish from '../pages/AddAddressFinish';

import { useData } from '../hooks/data';

const App = createStackNavigator();

const Routes: React.FC = () => {
  const { loaded } = useData();

  if (!loaded) {
    return <View />;
  }

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="AddAddressSelect" component={AddAddressSelect} />
      <App.Screen name="AddAddressFinish" component={AddAddressFinish} />
    </App.Navigator>
  );
};

export default Routes;
