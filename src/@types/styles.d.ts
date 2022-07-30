/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import 'styled-components';
import { PaletteColorOptions, PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      secondary: {
        lighter: string;
        light: string;
        main: string;
        dark: string;
      };

      error: {
        main: string;
      };
    };
  }
}

declare module '@mui/material/styles' {
  export interface PaletteColorOptions {
    lighter?: string;
    light?: string;
    main?: string;
    dark?: string;
  }
  export interface PaletteColor {
    lighter?: string;
    light?: string;
    main?: string;
    dark?: string;
  }
  export interface SimplePaletteColorOptions {
    lighter?: string;
    light?: string;
    main?: string;
    dark?: string;
  }
}
