import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const About = () => (
  <Wrap>
    <h3>About</h3>
    <p>Здесь должен быть текст рыба, но у меня не работает автозаполнение..</p>
  </Wrap>
);

export default About;
