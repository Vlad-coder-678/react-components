import React from 'react';
import styled from 'styled-components';

import SearchBar from './SearchBar';
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

const SectionFirstScreen = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('inputS');
  const [searchQuery, setSearchQuery] = React.useState(query || '');

  const filterCards = (cards, q) => {
    if (!q) {
      return cards;
    }
    return cards.filter((card) => {
      const cardName = `${card.title.toLowerCase()} ${card.text.toLowerCase()}`;
      return cardName.includes(q);
    });
  };

  const filteredCards = filterCards(cardsData, searchQuery);

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Cards>
        {filteredCards.map((item) => (
          <CardComponent data={item} key={item.author} />
        ))}
      </Cards>
    </div>
  );
};

export default SectionFirstScreen;
