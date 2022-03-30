import styled, { keyframes } from 'styled-components';

const appearanceAnimation = keyframes`
  from {
    opacity: 0;
    transform: scaleX(.5);
  }
  to {
    opacity: 1;
    transform: scaleX(1);

  }
`;

export const ModalWapper = styled.td`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: -2px;
  left: -10%;
  width: 120%;
  height: calc(100% + 2px);
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 0.5rem;
  z-index: 1000;
  background-color: ${({ theme }) => theme.tableColor};
  font-size: 1.3rem;
  animation: ${appearanceAnimation} 0.2s;

  @media (max-width: 480px) {
    left: 0;
    width: 100%;
  } ;
`;

export const ModalHeader = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
`;
export const ModalInformations = styled.div`
  display: flex;
  align-items: center;

  div {
    flex-basis: 100%;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const ElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ElementHeader = styled.div`
  font-weight: 700;
  padding-bottom: 1rem;
`;

export const BoldSpan = styled.div`
  font-weight: 700;
  padding-right: 1rem;
`;
export const ElementItem = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
`;

export const Image = styled.img`
  height: 8.5rem;
`;
