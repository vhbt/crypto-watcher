import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface useDarkModeData {
  isDarkMode: boolean;
  loadedDarkMode: boolean;
  toggleDarkMode(): void;
}

const ThemeContext = createContext({ isDarkMode: false } as useDarkModeData);

const DarkModeProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loadedDarkMode, setLoadedDarkMode] = useState(false);

  useEffect(() => {
    async function getDarkModeFromStorage() {
      const darkModeStored = await AsyncStorage.getItem(
        '@cryptowatcher:darkMode',
      );

      if (darkModeStored) {
        const darkModeParsed = JSON.parse(darkModeStored);
        setIsDarkMode(darkModeParsed);
      }

      setLoadedDarkMode(true);
    }

    getDarkModeFromStorage();
  });

  const toggleDarkMode = () => {
    setIsDarkMode(old => {
      AsyncStorage.setItem('@cryptowatcher:darkMode', JSON.stringify(!old));

      return !old;
    });
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkMode, loadedDarkMode, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useDarkMode = (): useDarkModeData => {
  const context = useContext(ThemeContext);

  return context;
};

export { DarkModeProvider, useDarkMode };
