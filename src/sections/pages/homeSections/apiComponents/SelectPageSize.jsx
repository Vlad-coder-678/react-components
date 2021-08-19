import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changePageSize } from '../sectionApiSlice';

const sizes = [5, 10, 20];

const SelectPageSize = () => {
  const pageSize = useSelector((state) => state.api.pageSize);
  const dispatch = useDispatch();

  return (
    <select
      value={pageSize}
      onChange={(e) => {
        dispatch(changePageSize(e.target.value));
      }}
    >
      {sizes.map((i) => (
        <option key={i} value={i}>
          {i}
        </option>
      ))}
    </select>
  );
};

export default SelectPageSize;
