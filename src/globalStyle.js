import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html, body{
    overflow-X: hidden;
  }
  body {
    background-color: #ddd;
  }  
  .transition-enter {
    opacity: 0;
    transform: translate(-200px, 0);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0;
    transform: translate(200px, 0);
    transition: all 300ms ease-in;
  }
`;

export default GlobalStyle;
