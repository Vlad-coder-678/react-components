import React from 'react';
import styled from 'styled-components';

import CardComponent from './CardComponent';

// eslint-disable-next-line import/extensions
import { cardsData } from '../data/cardsData.js';

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
`;

const SectionFirstScreen = () => (
  <div>
    <Cards>
      {cardsData.map((item) => (
        <CardComponent data={item} key={item.author} />
      ))}
    </Cards>
  </div>
);

export default SectionFirstScreen;
