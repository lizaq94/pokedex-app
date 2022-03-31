import React, { useState } from 'react';
import { PokemonWithDetails } from '../../../types/types';
import { Tr, Td } from '../../atoms/TableElements/TableElements';
import {
  StyledTr,
  StyledTd,
  TableNameColumn,
  Name,
  Type,
} from './PokemonsTableRowstyled';
import noImage from '../../../assets/images/noImage.png';

type PokemonsTableRowProps = {
  pokemon: PokemonWithDetails;
};
const PokemonsTableRow = ({ pokemon }: PokemonsTableRowProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <StyledTr
        key={pokemon.name}
        onClick={() => {
          setIsOpenModal((prevState) => !prevState);
          if (isOpenModal) setIsOpenModal(false);
        }}
      >
        <Td isOpen={isOpenModal}>
          <TableNameColumn>
            {pokemon.sprite ? (
              <img src={pokemon.sprite} alt={`${pokemon.name} image`} />
            ) : (
              <img src={noImage} alt='no image' />
            )}

            <Name>{pokemon.name}</Name>
          </TableNameColumn>
        </Td>
        <Td isOpen={isOpenModal}>
          {pokemon.types.map((type) => (
            <Type key={type.slot}>{type.type.name}</Type>
          ))}
        </Td>
      </StyledTr>
      <Tr>
        {isOpenModal && (
          <StyledTd colSpan={2}>
            <div>
              <span>Weight:</span>
              {pokemon.weight / 10} kg
            </div>
            <div>
              <span>Height:</span> {pokemon.height / 10} m
            </div>
          </StyledTd>
        )}
      </Tr>
    </>
  );
};

export default PokemonsTableRow;
