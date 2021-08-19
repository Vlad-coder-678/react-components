import React from 'react';

const SelectPageSize = ({ pageSize, setPageSize, sizePage }) => (
  <select
    value={pageSize}
    onChange={(e) => {
      setPageSize(e.target.value);
    }}
  >
    <option value={sizePage.five}>{sizePage.five}</option>
    <option value={sizePage.ten}>{sizePage.ten}</option>
    <option value={sizePage.twenty}>{sizePage.twenty}</option>
  </select>
);

export default SelectPageSize;
