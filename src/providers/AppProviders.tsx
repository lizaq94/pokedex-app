import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/globalSyle';
import { AppContextProvider } from '../context/AppContext';
import { ChangeThemeButton } from '../components/atoms/Button/Button';

const AppProviders = ({ children }: JSX.ElementChildrenAttribute) => {
  const [isLight, setIsLight] = useState(true);

  return (
    <AppContextProvider>
      <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
        <GlobalStyle />
        <ChangeThemeButton
          onClick={() => {
            setIsLight((prevState) => !prevState);
          }}
        >
          Change theme
        </ChangeThemeButton>
        {children}
      </ThemeProvider>
    </AppContextProvider>
  );
};

export default AppProviders;
