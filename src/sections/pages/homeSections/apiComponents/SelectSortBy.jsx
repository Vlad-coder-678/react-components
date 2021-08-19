import React from 'react';

const SelectSortBy = ({ sortBy, setSortBy, sortType }) => (
  <select
    value={sortBy}
    onChange={(e) => {
      setSortBy(e.target.value);
    }}
  >
    <option value={sortType.popularity}>{sortType.popularity}</option>
    <option value={sortType.relevancy}>{sortType.relevancy}</option>
    <option value={sortType.publishedAt}>{sortType.publishedAt}</option>
  </select>
);

export default SelectSortBy;
