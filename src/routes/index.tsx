import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import { useDarkMode } from '../hooks/darkMode';
import { light, dark } from '../constants/theme';

import MainStackNavigator from './MainStackNavigator';

const Routes: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? dark : light}>
      <MainStackNavigator />
      <StatusBar
        style={isDarkMode ? 'light' : 'dark'}
        backgroundColor="transparent"
        animated
      />
    </ThemeProvider>
  );
};

export default Routes;
