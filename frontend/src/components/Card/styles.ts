import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    border-radius: ${theme.metrics.baseRadius}px;
    box-shadow: 0 0 10px 6px ${theme.colors.boxShadow};
    max-height: 378px;
  `}

  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    height: 150px;
    width: 100%;
  }
`;
