import styled, { keyframes, css } from 'styled-components';

import { Item } from '../../store/modules/cart/reducer';

interface ItemRowProps {
  item: Item;
}

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

export const ItemsContainer = styled.div`
  padding: 16px;
`;

export const ItemRow = styled.div<ItemRowProps>`
  display: flex;
  align-items: center;
  padding: 8px 0;

  & + div {
    border-top: 1px solid #ccc;
  }

  .item-img {
    ${({ item, theme }) => css`
      background: url(${item.image}) center center no-repeat;
      border-radius: ${theme.metrics.baseRadius}px;
      display: none;

      @media (min-width: ${theme.breakpoints.sm}) {
        display: block;
      }
    `}
    background-size: cover;
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }

  button {
    background: transparent;
    border: 0;
    width: 30px;
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 10px;
    flex: 1;

    input {
      ${({ theme }) => css`
        border: 1px solid ${theme.colors.primary};
        border-radius: ${theme.metrics.baseRadius}px;
        width: 50px;
      `}
      padding: 8px;
    }
  }

  .sub-total {
    width: 80px;
    display: block;
    text-align: right;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;

  span {
    margin-right: 16px;
  }
`;
