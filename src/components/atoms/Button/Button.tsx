import styled from 'styled-components';

export const Button = styled.button`
  margin: 2rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.fontColor};
  color: ${({ theme }) => theme.backgroundColor};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  transform: scale(1);
  transition: transform 0.2s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ChangeThemeButton = styled(Button)`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 1rem;
  padding: 1rem 1rem;
  margin: 1rem;


  @media (max-width: 460px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 7rem;
    
`;
