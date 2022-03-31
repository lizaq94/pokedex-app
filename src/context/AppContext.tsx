import { createContext, useState } from 'react';
import { PokemonWithDetails } from '../types/types';

type AppContextType = {
  pokemons: PokemonWithDetails[];
  setPokemons: (
    pokemons: (existingPokemons: PokemonWithDetails[]) => PokemonWithDetails[]
  ) => void;
};

export const AppContext = createContext<AppContextType>({
  pokemons: [],
  setPokemons: () => {},
});

export const AppContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [pokemons, setPokemons] = useState<PokemonWithDetails[]>([]);

  return (
    <AppContext.Provider
      value={{
        pokemons,
        setPokemons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
