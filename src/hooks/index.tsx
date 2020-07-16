import React from 'react';
import { DataProvider } from './data';

const AppProvider: React.FC = ({ children }) => {
  return <DataProvider>{children}</DataProvider>;
};

export default AppProvider;
