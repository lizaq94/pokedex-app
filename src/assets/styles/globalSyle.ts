import { createGlobalStyle } from 'styled-components';
import { lightTheme } from './theme';

type ThemeType = typeof lightTheme;
export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
 
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
  ;
  }
  
  input, select, input::placeholder {
    color: inherit;
  }
`;
