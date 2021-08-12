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
  const handlePage = (e) => {
    setPage(e.target.value);
  };
  const arr = [];
  for (let i = 1; i <= amountPages; i + 1) {
    arr.push(i);
  }

  return (
    <div>
      <h3>Pagination</h3>
      <PagWrap>
        {arr.map((item, index) => (
          <li key={item}>
            <button type="button" value={index} onClick={handlePage}>
              {index}
            </button>
          </li>
        ))}
      </PagWrap>
    </div>
  );
};

export default Pagination;
