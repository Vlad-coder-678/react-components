import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from '../sectionApiSlice';

const sorts = ['popularity', 'relevancy', 'publishedAt'];

const SelectSortBy = () => {
  const sortType = useSelector((state) => state.api.sortType);
  const dispatch = useDispatch();

  return (
    <select
      value={sortType}
      onChange={(e) => {
        dispatch(sortBy(e.target.value));
      }}
    >
      {sorts.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default SelectSortBy;
