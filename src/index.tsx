import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/globalSyle';
import { theme } from './assets/styles/theme';
import { AppContextProvider } from './components/context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
