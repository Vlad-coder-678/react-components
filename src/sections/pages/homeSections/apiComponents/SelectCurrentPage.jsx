import React from 'react';

const SelectCurrentPage = ({ currentPage, setCurrentPage, pageNumbers }) => (
  <select
    value={currentPage}
    onChange={(e) => {
      setCurrentPage(e.target.value);
    }}
  >
    {pageNumbers.map((number) => (
      <option value={number}>{number}</option>
    ))}
  </select>
);

export default SelectCurrentPage;
