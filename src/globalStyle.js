import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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
