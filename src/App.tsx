import React from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global';

import MUITheme from './Styles/Default/MUI';
import SCTheme from './Styles/Default/Styled';

import Router from './Router';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <SCThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <Router />
      </SCThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
