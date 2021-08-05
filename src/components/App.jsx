import React from 'react';
import styled from 'styled-components';

import SectionFirstScreen from './SectionFirstScreen';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const App = () => (
  <Container>
    <SectionFirstScreen />
  </Container>
);

export default App;
