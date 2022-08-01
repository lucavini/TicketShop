import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/global';

import MUITheme from './Styles/Themes/MUI';
import SCTheme from './Styles/Themes/Styled';

import { AuthProvider } from './Context/AuthContext';
import Router from './Router';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <SCThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <AuthProvider>
          <Router />
        </AuthProvider>
      </SCThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
