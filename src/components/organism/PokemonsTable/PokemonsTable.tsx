import React, { FC, useContext } from 'react';
import { Table, Thead, Tr, Th } from '../../atoms/TableElements/TableElements';
import PokemonsTableRow from '../../molecules/TableRow/PokemonsTableRow';
import { AppContext } from '../../../context/AppContext';

const PokemonsTable: FC = () => {
  const { pokemons } = useContext(AppContext);

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
