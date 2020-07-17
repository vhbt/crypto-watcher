import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const useDarkMode = (): readonly [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(old => {
      AsyncStorage.setItem('@cryptowatcher:darkMode', JSON.stringify(!old));

      return !old;
    });
  };

  useEffect(() => {
    async function getDarkModeFromStorage() {
      const darkModeStored = await AsyncStorage.getItem(
        '@cryptowatcher:darkMode',
      );

      if (darkModeStored) {
        const darkModeParsed = JSON.parse(darkModeStored);
        setIsDarkMode(darkModeParsed);
      }
    }

    getDarkModeFromStorage();
  });

  return [isDarkMode, toggleDarkMode] as const;
};
