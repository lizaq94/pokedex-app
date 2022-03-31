import React from 'react';
import PokemonsTable from './PokemonsTable';
import { screen } from '@testing-library/react';
import {
  renderWithContextProvider,
  renderWithProviders,
} from '../../../helpers/renderWithProviders';
import { PokemonWithDetails } from '../../../types/types';

describe('Pokemons Table', () => {
  const contextValue = (pokemons: PokemonWithDetails[]) => ({
    inputSearch: '',
    pokemons,
    selectedValue: '',
    setInputSearch: () => {},
    setPokemons: () => {},
    setSelectedValue: () => {},
  });

  const pokemons = [
    {
      name: 'bulbasur',
      types: [
        { slot: '1', type: { name: 'grass', url: 'https://someurl.com' } },
      ],
      height: 7,
      weight: 27,
      sprite: "'https://someimage.com",
    },
  ];

  it('Renderes the component', () => {
    renderWithProviders(<PokemonsTable />);
    screen.getByPlaceholderText('Search...');
  });

  it('Renderes the table if context contains pokemons ', () => {
    renderWithContextProvider(contextValue(pokemons), <PokemonsTable />);
    screen.getByText('bulbasur');
  });

  it('Not Renderes the table if context contains pokemons ', () => {
    renderWithContextProvider(contextValue([]), <PokemonsTable />);
    const pokemonName = screen.queryByText('bulbasur');
    expect(pokemonName).toBeNull();
  });
});
