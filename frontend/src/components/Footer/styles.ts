import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
  display: flex;
  align-items: center;
  height: 60px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  max-width: 90%;
  margin: 0 auto;

  span {
    font-weight: bold;
    ${({ theme }) => css`
      color: ${theme.colors.whiteText};
    `}
  }
`;
