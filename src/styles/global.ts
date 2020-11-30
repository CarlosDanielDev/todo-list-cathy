import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #212121;
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
  }

  div#root {
    width: 100%;
    height: 100%;
  }

  h1 {
    color: #ccc;
    font-weight: bold;
    line-height: 80px;
  }
`;