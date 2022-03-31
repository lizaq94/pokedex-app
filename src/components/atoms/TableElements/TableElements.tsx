import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  th,
  td {
    padding: 1rem 0.5rem;
  }
`;

export const Thead = styled.thead`
  text-align: left;
  height: 3rem;
  background-color: ${({ theme }) => theme.tableColor};
`;

export const Tr = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  &:last-of-type td {
    border: 0;
  }

  &:first-of-type td {
    border-top: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:last-of-type {
    td:last-of-type {
      border-bottom-right-radius: 0.5rem;
    }
    td:first-of-type {
      border-bottom-left-radius: 0.5rem;
    }
  }
`;
export const Th = styled.th`
  font-weight: normal;
`;
export const Td = styled.td<{ isOpen?: boolean }>`
  background-color: ${({ theme }) => theme.backgrounColor};
  border-bottom: ${({ isOpen, theme }) =>
    isOpen ? 0 : `1px solid ${theme.borderColor}`};
  transition: background-color 0.1s ease-out;
  cursor: pointer;
  } 
`;
