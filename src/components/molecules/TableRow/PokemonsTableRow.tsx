import React, { useState } from 'react';
import { PokemonWithDetails } from '../../../types/types';
import { Tr, Td } from '../../atoms/TableElements/TableElements';
import styled from 'styled-components';
import Modal from '../../atoms/Modal/Modal';
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
        <Td>
          <TableNameColumn>
            {pokemon.sprite ? (
              <img src={pokemon.sprite} alt={`${pokemon.name} image`} />
            ) : (
              <img src={noImage} alt='no image' />
            )}

            <Name>{pokemon.name}</Name>
          </TableNameColumn>
        </Td>
        <Td>
          {pokemon.types.map((type) => (
            <Type key={type.slot}>{type.type.name}</Type>
          ))}
        </Td>
        {isOpenModal && <Modal pokemon={pokemon} />}
      </StyledTr>
    </>
  );
};
const StyledTr = styled(Tr)`
  position: relative;
`;
const TableNameColumn = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  padding-left: 1rem;
`;

const Type = styled.div`
  padding-bottom: 0.5rem;
`;

export default PokemonsTableRow;
