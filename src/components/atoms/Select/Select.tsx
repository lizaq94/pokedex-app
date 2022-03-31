import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../../context/AppContext';

type SelectProps = {
  options: string[];
};

const Select: FC<SelectProps> = ({ options }) => {
  const { setSelectedValue } = useContext(AppContext);
  return (
    <StyedSelect
      placeholder='Select...'
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      <option value=''>all</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyedSelect>
  );
};

const StyedSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.tableColor};
`;

export default Select;
