import React from 'react';
import styled from 'styled-components';

const PagWrap = styled.ul`
  display: flex;
  justify-content: center;

  li {
    list-style: none;
  }
`;

const Pagination = ({ setPage, amountPages }) => {
  const handleSetPage = (e) => {
    setPage(e.target.value);
  };

  // eslint-disable-next-line consistent-return
  const listPagi = () => {
    for (let i = 1; i <= amountPages; i + 1) {
      return (
        <li>
          <button type="button" value={i} onClick={handleSetPage}>
            {i}
          </button>
        </li>
      );
    }
  };

  return (
    <div>
      <h3>Pagination</h3>
      <PagWrap>{listPagi}</PagWrap>
    </div>
  );
};

export default Pagination;
