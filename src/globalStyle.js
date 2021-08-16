import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.transition-enter {
    opacity: 0;
    transform: translate(0, -200px);
  }
  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 3s ease-in;
  }
  .transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-exit-active {
    opacity: 0;
    transform: translate(0, 200px);
    transition: all 3s ease-in;
  }
`;

export default GlobalStyle;
