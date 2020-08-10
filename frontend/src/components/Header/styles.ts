import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    box-shadow: 0 0 10px 6px ${theme.colors.boxShadow};
    background: ${theme.colors.background};
  `}

  height: 60px;
  display: flex;
  align-items: center;
  background: #fff;

  a {
    color: #d32f2f;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 30px;
    display: flex;
    align-items: center;
    text-decoration: none;

    .sm {
      display: none;
    }

    ${({ theme }) => css`
      @media (min-width: ${theme.breakpoints.sm}) {
        .xs {
          display: none;
        }

        .sm {
          display: block;
        }
      }
    `}

    & > img {
      width: 60px;
      margin-right: 15px;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    max-width: 90%;
    margin: 0 auto;

    ul {
      display: flex;
      align-items: center;
      list-style: none;

      li {
        & + li {
          margin-left: 20px;
        }

        a {
          color: #d32f2f;
          font-weight: bold;
          font-size: 18px;
          text-decoration: none;
          display: flex;
          align-items: center;

          &.go-to-cart {
            position: relative;
          }

          > span {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid #fff;
            color: #fff;
            font-size: 12px;
            background: #d32f2f;
            position: absolute;
            top: -10px;
            right: -14px;
          }
        }
      }
    }
  }
`;
