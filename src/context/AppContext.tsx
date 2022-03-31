import { createContext, useState } from 'react';
import { PokemonWithDetails } from '../types/types';

type AppContextType = {
  inputSearch: string;
  pokemons: PokemonWithDetails[];
  setInputSearch: (inputSearch: string) => void;
  setPokemons: (
    pokemons: (existingPokemons: PokemonWithDetails[]) => PokemonWithDetails[]
  ) => void;
};

export const AppContext = createContext<AppContextType>({
  inputSearch: '',
  pokemons: [],
  setInputSearch: () => {},
  setPokemons: () => {},
});

export const AppContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [pokemons, setPokemons] = useState<PokemonWithDetails[]>([]);
  const [inputSearch, setInputSearch] = useState<string>('');

  return (
    <AppContext.Provider
      value={{
        inputSearch,
        pokemons,
        setInputSearch,
        setPokemons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
