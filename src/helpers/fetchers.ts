import {
  PokemonGetAllApiResponse,
  PokemonWithDetails,
  PokemonWithDetailsApiResponse,
} from '../types/types';

export const fetchData = async <T extends object>(
  fetchUrl: string
): Promise<T | null> => {
  try {
    const response = await fetch(fetchUrl);
    return response.json();
  } catch (e) {
    return null;
  }
};

export const fetchPokemons = async (
  fetchUrl: string
): Promise<PokemonGetAllApiResponse> => {
  const data = await fetchData<PokemonGetAllApiResponse>(fetchUrl);

  if (!data)
    return {
      results: [],
      next: null,
    };

  return { results: data.results, next: data.next };
};

export const fetchPokemonDetails = async (
  url: string
): Promise<PokemonWithDetails | null> => {
  const data = await fetchData<PokemonWithDetailsApiResponse>(url);

  if (!data) return null;

  const { name, types, sprites, height, weight } = data;

  return { name, types, sprite: sprites.front_default, height, weight };
};

export const getPokemonsTypes = (
  pokemonsArray: PokemonWithDetails[]
): string[] => {
  const types = pokemonsArray.map((pokemon) => {
    return pokemon.types.map((t) => [t.type.name]);
  });
  const flatTypes = types.flat(2);
  return Array.from(new Set(flatTypes));
};
