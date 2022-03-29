import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import List from '../components/molecules/List/List';
import { AppContext } from '../components/context/AppContext';

const App = () => {
  const {
    pokemons,
    numberOfVisiblePokemons,
    setPokemons,
    setNumberOfVisiblePokemons,
  } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const totalNumberOfPokemons = 898;

  const getPokemonById = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response) return;
    const { name, types, sprites, height, weight } = await response.json();

    return { name, types, sprite: sprites.front_default, height, weight };
  };

  const getAllPokemons = async (numberOfPokemons: number) => {
    setIsLoading(true);
    const pokemonsArray = [];
    for (let i = 1; i <= numberOfPokemons; i++) {
      const pokemon = await getPokemonById(i);
      if (pokemon) {
        pokemonsArray.push(pokemon);
      }
    }
    setPokemons(pokemonsArray);
    setIsLoading(false);
  };
  const loadMore = () => {
    setNumberOfVisiblePokemons(numberOfVisiblePokemons + 20);
  };

  useEffect(() => {
    getAllPokemons(totalNumberOfPokemons)
      .then(() => console.log('The data has been downloaded'))
      .catch((e) => console.error(e));
  }, []);

  return (
    <Wrapper>
      <h1>Pokedex app</h1>
      {isLoading ? <h1>Loading...</h1> : <List listItems={pokemons} />}
      <button onClick={loadMore}>Load More</button>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
