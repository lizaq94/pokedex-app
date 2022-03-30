import { createContext, useState } from 'react';
import { Pokemon } from '../types/types';

type AppContextType = {
  pokemons: Pokemon[] | [];
  setPokemons: (pokemons: (existingPokemons: Pokemon[]) => any[]) => void;
};

export const AppContext = createContext<AppContextType>({
  pokemons: [],
  setPokemons: () => {},
});

export const AppContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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
