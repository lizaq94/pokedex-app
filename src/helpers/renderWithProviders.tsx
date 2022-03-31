import React from 'react';
import { render } from '@testing-library/react';
import AppProviders from '../providers/AppProviders';
import { AppContext, AppContextType } from '../context/AppContext';

export const renderWithProviders = (children: JSX.Element) => {
  return render(<AppProviders>{children}</AppProviders>);
};

export const renderWithContextProvider = (
  value: AppContextType,
  children: JSX.Element
) => {
  return render(
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};
