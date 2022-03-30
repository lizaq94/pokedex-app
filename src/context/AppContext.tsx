import { createContext, useState } from 'react';
import { Pokemon } from '../types/types';

type AppContextType = {
  numberOfVisiblePokemons: number;
  pokemons: Pokemon[] | [];
  setNumberOfVisiblePokemons: (numberOfVisiblePokemons: number) => void;
  setPokemons: (pokemons: (existingPokemons: Pokemon[]) => any[]) => void;
};

export const AppContext = createContext<AppContextType>({
  numberOfVisiblePokemons: 0,
  pokemons: [],
  setNumberOfVisiblePokemons: () => {},
  setPokemons: () => {},
});

export const AppContextProvider = ({
  children,
}: JSX.ElementChildrenAttribute) => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [numberOfVisiblePokemons, setNumberOfVisiblePokemons] = useState(20);

  return (
    <AppContext.Provider
      value={{
        numberOfVisiblePokemons,
        pokemons,
        setPokemons,
        setNumberOfVisiblePokemons,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
