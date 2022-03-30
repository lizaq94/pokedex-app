import React from 'react';
import { Pokemon } from '../../../types/types';
import { Table, Thead, Tr, Th } from '../../atoms/TableElements/TableElements';
import PokemonsTableRow from '../../molecules/TableRow/PokemonsTableRow';

type TableProps = {
  pokemons: Pokemon[];
};

const PokemonsTable = ({ pokemons }: TableProps) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Type</Th>
        </Tr>
      </Thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <PokemonsTableRow key={pokemon.name} pokemon={pokemon} />
        ))}
      </tbody>
    </Table>
  );
};

export default PokemonsTable;
