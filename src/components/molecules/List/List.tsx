import React, { useContext } from 'react';
import ListItem from '../../atoms/ListItem/ListItem';
import { Pokemon } from '../../../types/types';
import { AppContext } from '../../context/AppContext';

type ListProps = {
  listItems: Pokemon[];
};

const List = ({ listItems }: ListProps) => {
  const { numberOfVisiblePokemons } = useContext(AppContext);
  return (
    <>
      {listItems &&
        listItems
          .slice(0, numberOfVisiblePokemons)
          .map((p) => <ListItem key={p.name} item={p} />)}
    </>
  );
};

export default List;
