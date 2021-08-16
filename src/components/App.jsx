import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import GlobalStyle from '../globalStyle';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <Router>
      <Header />
      <Body />
    </Router>
  </Container>
);

export default App;
