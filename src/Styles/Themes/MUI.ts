import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Sora", sans-serif',
  },

  palette: {
    primary: {
      lighter: '#D7ECFF',
      light: '#82BBEF',
      main: '#3375B2',
      dark: '#083C6B',
    },

    secondary: {
      lighter: '#F2F2F2',
      light: '#E6E6E6',
      main: '#8C8C8C',
      dark: '#202020',
    },

    error: {
      main: '#F13E3E',
    },
  },
});

export default theme;
