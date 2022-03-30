import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Tittle } from './App.styled';
import { AppContext } from '../context/AppContext';
import PokemonsTable from '../components/organism/PokemonsTable/PokemonsTable';
import { Button } from '../components/atoms/Button/Button';

const INITIAL_FETCH_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

const fetchPokemons = async (fetchUrl: string) => {
  const response = await fetch(fetchUrl);
  if (!response)
    return {
      pokemons: [],
      next: null,
    };
  const { results, next } = await response.json();

  return { results, next };
};

const App = () => {
  const { pokemons, setPokemons } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchUrl, setfetchUrl] = useState<string>(INITIAL_FETCH_URL);

  const getPokemonDetails = async (url: string) => {
    const response = await fetch(url);
    if (!response) return;
    const { name, types, sprites, height, weight } = await response.json();

    return { name, types, sprite: sprites.front_default, height, weight };
  };

  const getPokemonsWithDetails = async () => {
    if (!pokemons.length) {
      setIsLoading(true);
    }

    const { results, next } = await fetchPokemons(fetchUrl);

    const pokemonDetailsPromisesMap = results.map(
      (r: { name: string; url: string }) => getPokemonDetails(r.url)
    );

    const pokemonsWithDetails = await Promise.all(pokemonDetailsPromisesMap);
    setIsLoading(true);
    setPokemons((existingPokemons) => [
      ...existingPokemons,
      ...pokemonsWithDetails,
    ]);
    setfetchUrl(next);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonsWithDetails().catch((e) => console.error(e));
  }, []);
  console.log('KAMIL fetchUrl:', fetchUrl);
  return (
    <Wrapper>
      <Tittle>Pokedex app</Tittle>
      {isLoading ? <h1>Loading...</h1> : <PokemonsTable pokemons={pokemons} />}
      {fetchUrl ? (
        <Button onClick={getPokemonsWithDetails}>Load more</Button>
      ) : null}
    </Wrapper>
  );
};

export default App;
