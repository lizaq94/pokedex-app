import React, { FC, useContext } from 'react';
import { Table, Thead, Tr, Th } from '../../atoms/TableElements/TableElements';
import { Input } from '../../atoms/Input/Input';
import PokemonsTableRow from '../../molecules/TableRow/PokemonsTableRow';
import { AppContext } from '../../../context/AppContext';
import styled from 'styled-components';
import Select from '../../atoms/Select/Select';
import { getPokemonsTypes } from '../../../fetchers';

const PokemonsTable: FC = () => {
  const { pokemons, inputSearch, selectedValue, setInputSearch } =
    useContext(AppContext);

  return (
    <>
      <Form>
        <Input
          type='text'
          placeholder='Search...'
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Select options={getPokemonsTypes(pokemons)} />
      </Form>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <tbody>
          {pokemons
            .filter((p) =>
              p.name.toLowerCase().includes(inputSearch.toLowerCase())
            )
            .filter(
              (pk) =>
                pk.types.findIndex((t) => t.type.name === selectedValue) !==
                  -1 || selectedValue === ''
            )
            .map((pokemon) => (
              <PokemonsTableRow key={pokemon.name} pokemon={pokemon} />
            ))}
        </tbody>
      </Table>
    </>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export default PokemonsTable;
