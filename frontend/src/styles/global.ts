import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button, select, textarea {
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
    transition: all 200ms ease;
  }
`;
