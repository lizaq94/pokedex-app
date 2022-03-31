export type PokemonWithDetails = {
  name: string;
  types: { slot: string; type: { name: string; url: string } }[];
  height: number;
  weight: number;
  sprite: string;
};

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonGetAllApiResponse = {
  results: Pokemon[];
  next: string | null;
};

export type PokemonWithDetailsApiResponse = {
  name: string;
  types: { slot: string; type: { name: string; url: string } }[];
  sprites: { front_default: string };
  height: number;
  weight: number;
};
