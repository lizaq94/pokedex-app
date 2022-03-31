import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from '../../../helpers/renderWithProviders';
import PokemonsTableRow from './PokemonsTableRow';

describe('Pokemons Table', () => {
  const pokemon = {
    name: 'bulbasur',
    types: [{ slot: '1', type: { name: 'grass', url: 'https://someurl.com' } }],
    height: 7,
    weight: 27,
    sprite: "'https://someimage.com",
  };

  it('Renderes the component', () => {
    renderWithProviders(<PokemonsTableRow pokemon={pokemon} />);
    screen.getByText('bulbasur');
  });

  it('After clicking to component shows more information about pokemon', () => {
    renderWithProviders(<PokemonsTableRow pokemon={pokemon} />);
    const element = screen.getByText('bulbasur');
    fireEvent.click(element);
    screen.getByText('Weight:');
  });

  it('When you click on the component again, hides more information about pokemon', () => {
    renderWithProviders(<PokemonsTableRow pokemon={pokemon} />);
    const element = screen.getByText('bulbasur');
    fireEvent.click(element);
    screen.getByText('Weight:');
    fireEvent.click(element);
    expect(screen.queryByText('Weight:')).toBeNull();
  });
});
