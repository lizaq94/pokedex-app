import styled from 'styled-components';
import { Td, Tr } from '../../atoms/TableElements/TableElements';

export const StyledTr = styled(Tr)`
  position: relative;
`;
export const StyledTd = styled(Td)`
  text-align: center;

  div > span {
    padding-right: 0.5rem;
    font-weight: 600;
  }
`;
export const TableNameColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  padding-left: 1rem;
`;

export const Type = styled.div`
  padding-bottom: 0.5rem;
`;
