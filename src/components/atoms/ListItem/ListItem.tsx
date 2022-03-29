import React, { useState } from 'react';
import { Pokemon } from '../../../types/types';
import styled, { keyframes } from 'styled-components';

type LisItemProps = {
  item: Pokemon;
};

const ListItem = ({ item }: LisItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMoreInformation = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <ItemWrapper>
      <ItemImage src={item.sprite} />
      <DescriptionWrapper>
        <ItemName>Name: {item.name}</ItemName>
        <ItemType>
          <Paragraph>Type:</Paragraph>
          {item.types.map((t) => (
            <Paragraph key={t.slot}>{t.type.name} </Paragraph>
          ))}
        </ItemType>
        {isOpen && (
          <div>
            <p>Weight: {item.weight}</p>
            <p>Height: {item.height}</p>
          </div>
        )}
        <MoreButton onClick={toggleMoreInformation}>
          {isOpen ? 'Less information' : 'More information'}
        </MoreButton>
      </DescriptionWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  margin: 0.5rem auto;
  width: 50rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black; ;
`;
const ItemImage = styled.img`
  width: 9.6rem;
`;
const DescriptionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ItemName = styled.div``;
const ItemType = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;
const Paragraph = styled.p`
  padding: 0 0.2rem;
`;
const MoreButton = styled.div`
  cursor: pointer;
  font-weight: 700;
  color: blue;
`;
export default ListItem;
