import styled, { keyframes } from 'styled-components';

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
