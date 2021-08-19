import React from 'react';
import styled from 'styled-components';

import CardNews from './CardNews';

const Wrap = styled.div`
  ul {
    li {
      list-style: none;
      margin: 5px;
    }
  }
`;

// eslint-disable-next-line object-curly-newline
const Cards = ({ arts }) => (
  <Wrap>
    <ul>
      {arts.map((item) => (
        <li key={item.title}>
          <CardNews img={item.urlToImage} title={item.title} desc={item.description} path={item.url} />
        </li>
      ))}
    </ul>
  </Wrap>
);

export default Cards;
