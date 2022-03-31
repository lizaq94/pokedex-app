import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
`;

export const Tittle = styled.h1`
   {
    @media (max-width: 400px) {
      font-size: 3rem;
    }
  }
`;

export const ErrorMessage = styled.h2`
  color: red;
`;
