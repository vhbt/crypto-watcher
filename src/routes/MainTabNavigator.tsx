import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';

import { useData } from '../hooks/data';
import { useDarkMode } from '../hooks/darkMode';
import { light, dark } from '../constants/theme';

import {
  AddressesDashboard,
  AddAddressSelect,
  AddAddressFinish,
} from '../screens/addresses';

import Settings from '../screens/settings';

const AddressesStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

const AddressesStackNavigator: React.FC = () => {
  return (
    <AddressesStack.Navigator screenOptions={{ headerShown: false }}>
      <AddressesStack.Screen name="Dashboard" component={AddressesDashboard} />
      <AddressesStack.Screen
        name="AddAddressSelect"
        component={AddAddressSelect}
      />
      <AddressesStack.Screen
        name="AddAddressFinish"
        component={AddAddressFinish}
      />
    </AddressesStack.Navigator>
  );
};

const SettingsStackNavigator: React.FC = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const MainTabNavigator: React.FC = () => {
  const { loadedData } = useData();
  const { isDarkMode, loadedDarkMode } = useDarkMode();
  const activeTheme = isDarkMode ? dark : light;

  async function appLoadFinished() {
    await SplashScreen.hideAsync();
  }

  if (loadedData && loadedDarkMode) {
    appLoadFinished();
  }

  return (
    <MainTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: activeTheme.colors.background,
        inactiveBackgroundColor: activeTheme.colors.background,
        activeTintColor: activeTheme.colors.primary,
        inactiveTintColor: activeTheme.colors.primary,
        style: { borderTopWidth: 0, borderTopColor: 'transparent' },
      }}
    >
      <MainTab.Screen
        name="Addresses"
        component={AddressesStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
      />
      <MainTab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainTabNavigator;
