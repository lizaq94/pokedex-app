export type Pokemon = {
  name: string;
  types: { slot: string; type: { name: string; url: string } }[];
  sprite: string;
  height: number;
  weight: number;
};
