import React, { FC, useContext } from 'react';
import { Table, Thead, Tr, Th } from '../../atoms/TableElements/TableElements';
import PokemonsTableRow from '../../molecules/TableRow/PokemonsTableRow';
import { AppContext } from '../../../context/AppContext';
import styled from 'styled-components';

const PokemonsTable: FC = () => {
  const { pokemons, inputSearch, setInputSearch } = useContext(AppContext);

  return (
    <>
      <Form>
        <Input
          type='text'
          placeholder='Search...'
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Select defaultValue='Alll'>
          <option>option1</option>
          <option>option2</option>
          <option>option3</option>
        </Select>
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
            .filter(
              (p) =>
                p.name === '' ||
                p.name.toLowerCase().includes(inputSearch.toLowerCase())
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

const Input = styled.input`
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.tableColor};

  &:focus {
    outline-color: ${({ theme }) => theme.fontColor};
  }
`;

const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.tableColor};
`;

export default PokemonsTable;
