import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #282a36;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root{
    height: 100%;
  }

  button{
    cursor: pointer;
  }
`;
