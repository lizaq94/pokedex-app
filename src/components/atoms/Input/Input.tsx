import styled from 'styled-components';

export const Input = styled.input`
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.tableColor};

  &:focus {
    outline-color: ${({ theme }) => theme.fontColor};
  }
`;
