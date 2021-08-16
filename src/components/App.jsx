import React from 'react';
import styled from 'styled-components';

// import SectionFirstScreen from './SectionFirstScreen';
// import SectionForms from './SectionForms';
import SectionApi from './SectionApi';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
`;

const App = () => (
  <Container>
    {/* <SectionFirstScreen /> */}
    {/* <SectionForms /> */}
    <SectionApi />
  </Container>
);

export default App;
