import { createContext, useState } from 'react';
import { PokemonWithDetails } from '../types/types';

export type AppContextType = {
  inputSearch: string;
  pokemons: PokemonWithDetails[];
  selectedValue: string;
  setInputSearch: (inputSearch: string) => void;
  setPokemons: (
    pokemons: (existingPokemons: PokemonWithDetails[]) => PokemonWithDetails[]
  ) => void;
  setSelectedValue: (selectedValue: string) => void;
};

export const AppContext = createContext<AppContextType>({
  inputSearch: '',
  pokemons: [],
  selectedValue: '',
  setInputSearch: () => {},
  setPokemons: () => {},
  setSelectedValue: () => {},
});

export const AppContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [pokemons, setPokemons] = useState<PokemonWithDetails[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <AppContext.Provider
      value={{
        inputSearch,
        pokemons,
        selectedValue,
        setInputSearch,
        setPokemons,
        setSelectedValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
