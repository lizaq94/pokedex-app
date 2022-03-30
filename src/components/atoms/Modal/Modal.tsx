import React from 'react';
import {
  ModalWapper,
  ModalHeader,
  ModalInformations,
  ImageWrapper,
  ElementWrapper,
  ElementHeader,
  BoldSpan,
  ElementItem,
  Image,
} from './Modal.styled';
import { Pokemon } from '../../../types/types';
import noImage from '../../../assets/images/noImage.png';

type ModalProps = {
  pokemon: Pokemon;
};

const Modal = ({ pokemon }: ModalProps) => {
  return (
    <ModalWapper>
      <ModalHeader>{pokemon.name}</ModalHeader>
      <ModalInformations>
        <ImageWrapper>
          {pokemon.sprite ? (
            <Image src={pokemon.sprite} alt={`${pokemon.name} image`} />
          ) : (
            <img src={noImage} alt='no image' />
          )}
        </ImageWrapper>
        <ElementWrapper>
          <ElementHeader>Type:</ElementHeader>
          {pokemon.types.map((type) => (
            <ElementItem key={type.slot}>{type.type.name}</ElementItem>
          ))}
        </ElementWrapper>
        <ElementWrapper>
          <ElementHeader>More information: </ElementHeader>
          <ElementItem>
            <BoldSpan>Weight: </BoldSpan>
            {pokemon.weight}
          </ElementItem>
          <ElementItem>
            <BoldSpan>Height: </BoldSpan>
            {pokemon.height}
          </ElementItem>
        </ElementWrapper>
      </ModalInformations>
    </ModalWapper>
  );
};

export default Modal;
