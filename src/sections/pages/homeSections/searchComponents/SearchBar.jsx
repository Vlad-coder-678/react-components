import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  padding: 30px 0;
  margin: 10px;
  text-align: center;
`;

const VisualHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <Wrap>
    <form action="/" method="get">
      <label htmlFor="header-search">
        <VisualHidden>Search posts</VisualHidden>
      </label>
      <input
        value={searchQuery}
        onInput={(e) => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search posts"
        name="inputS"
      />
      <button type="submit">Search</button>
    </form>
  </Wrap>
);

export default SearchBar;
