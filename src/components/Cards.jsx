import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from './axiosInstance';

import CardNews from './CardNews';
import Pagination from './Pagination';

const Wrap = styled.div`
  ul {
    li {
      list-style: none;
      margin: 5px;
    }
  }
`;

// eslint-disable-next-line object-curly-newline
const Cards = ({ searchQuery, API_KEY, sortBy, pageSize, page, setArts, setIsLoading, setPage, arts }) => {
  useEffect(async () => {
    try {
      const response = await axios.get(
        `/everything?q=${searchQuery}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`
      );
      setArts(response.data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  return (
    <Wrap>
      <Pagination setPage={setPage} amountPages={arts.length / pageSize} />
      <ul>
        {arts.map((item) => (
          <li key={item.title}>
            <CardNews img={item.urlToImage} title={item.title} desc={item.description} path={item.url} />
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

export default Cards;
