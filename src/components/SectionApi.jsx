import React, { useState } from 'react';
import styled from 'styled-components';

import Cards from './Cards';
import axios from './axiosInstance';
import SelectSortBy from './SelectSortBy';
import SelectPageSize from './SelectPageSize';
import SelectCurrentPage from './SelectCurrentPage';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
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

const API_KEY = '06ce86ba632e44f5a547738589d46c75';
const sortType = { relevancy: 'relevancy', popularity: 'popularity', publishedAt: 'publishedAt' };
const sizes = { five: 5, ten: 10, twenty: 20 };
const totalArts = 100;
const pageNumbers = new Array(totalArts).fill(1).map((a, i) => i + 1);

const SectionApi = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('inputS');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [isLoading, setIsLoading] = useState(false);
  const [arts, setArts] = useState([]);
  const [sortBy, setSortBy] = useState(sortType.relevancy);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(sizes.five);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/everything?q=${searchQuery}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${currentPage}`
      );
      setArts(response.data.articles);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Container>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <label htmlFor="api-search">
          <VisualHidden>Search posts</VisualHidden>
        </label>
        <input
          id="api-search"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search posts"
          name="inputS"
          required
        />
        <SelectSortBy sortBy={sortBy} setSortBy={setSortBy} sortType={sortType} />
        <SelectPageSize pageSize={pageSize} setPageSize={setPageSize} sizePage={sizes} />
        <SelectCurrentPage
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageNumbers={pageNumbers.slice(0, totalArts / pageSize)}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'loading...' : 'Search'}
        </button>
      </form>
      {arts.length > 0 && (
        <Wrap>
          <Cards arts={arts} />
        </Wrap>
      )}
    </Container>
  );
};

export default SectionApi;
