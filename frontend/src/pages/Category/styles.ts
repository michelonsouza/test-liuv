import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - 160px);
  padding: 20px 0;
`;

export const Content = styled.div`
  width: 900px;
  max-width: 90%;
  margin: 0 auto;
  transform: translateY(100px);
  opacity: 0;
  animation: ${slideUp} 800ms ease forwards;

  h1 {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 20px;
  row-gap: 20px;

  ${({ theme }) => css`
    @media (min-width: ${theme.breakpoints.xs}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;
