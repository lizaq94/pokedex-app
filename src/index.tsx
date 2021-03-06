import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import AppProviders from './providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
