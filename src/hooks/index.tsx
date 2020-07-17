import React from 'react';

import { DataProvider } from './data';
import { DarkModeProvider } from './darkMode';

const AppProvider: React.FC = ({ children }) => {
  return (
    <DataProvider>
      <DarkModeProvider>{children}</DarkModeProvider>
    </DataProvider>
  );
};

export default AppProvider;
