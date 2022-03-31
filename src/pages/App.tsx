import React, { useState, useEffect, useContext } from 'react';
import { Wrapper, Tittle, ErrorMessage } from './App.styled';
import { AppContext } from '../context/AppContext';
import PokemonsTable from '../components/organism/PokemonsTable/PokemonsTable';
import { Button } from '../components/atoms/Button/Button';
import { fetchPokemons, fetchPokemonDetails } from '../helpers/fetchers';
import { PokemonWithDetails } from '../types/types';

const INITIAL_FETCH_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

const App = () => {
  const { pokemons, setPokemons, inputSearch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchUrl, setfetchUrl] = useState<string | null>(INITIAL_FETCH_URL);
  const [error, setError] = useState<boolean>(false);

  const getPokemonsWithDetails = async () => {
    if (!pokemons.length) {
      setIsLoading(true);
    }

    if (!fetchUrl) return;

    const { results, next } = await fetchPokemons(fetchUrl);
    if (results.length === 0) setError(true);
    const pokemonDetailsPromisesMap = results.map(
      (r: { name: string; url: string }) => fetchPokemonDetails(r.url)
    );

    const pokemonsWithDetails = await Promise.all(pokemonDetailsPromisesMap);

    const pokemonsWithDetailsValidValues = pokemonsWithDetails.filter(
      (d) => d !== null
    ) as PokemonWithDetails[];

    setPokemons((existingPokemons) => [
      ...existingPokemons,
      ...pokemonsWithDetailsValidValues,
    ]);
    setfetchUrl(next);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonsWithDetails().catch((e) => console.error(e));
  }, []);

  return (
    <Wrapper>
      <Tittle>Pokedex app</Tittle>
      {error ? (
        <ErrorMessage>Oops, something went wrong!</ErrorMessage>
      ) : (
        <>
          {isLoading ? <h1>Loading...</h1> : <PokemonsTable />}
          {fetchUrl && inputSearch.length === 0 && (
            <Button onClick={getPokemonsWithDetails}>Load more</Button>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default App;
