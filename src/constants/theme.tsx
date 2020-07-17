import { DefaultTheme } from 'styled-components';

const light: DefaultTheme = {
  colors: {
    primary: '#1c1c1c',
    secondary: '#8a8a8a',
    inverted: '#fff',
    background: '#fcfcff',
  },
  statusBar: 'dark',
};

const dark: DefaultTheme = {
  colors: {
    primary: '#fff',
    secondary: '#8a8a8a',
    inverted: '#fcfcff',
    background: '#010101',
  },
  statusBar: 'light',
};

export { light, dark };
export default light;
