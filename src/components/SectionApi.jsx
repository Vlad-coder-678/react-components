import React, { useState } from 'react';
import styled from 'styled-components';

import Cards from './Cards';
import axios from './axiosInstance';

const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const sizePage = { five: 5, ten: 10, twenty: 20 };

const SectionApi = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('inputS');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [isLoading, setIsLoading] = useState(false);
  const [arts, setArts] = useState([]);
  const [sortBy, setSortBy] = useState(sortType.relevancy);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(sizePage.five);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/everything?q=${searchQuery}&apiKey=${API_KEY}&sortBy=${sortBy}&pageSize=${pageSize}&page=${currentPage}`
      );
      setArts(response.data.articles);
      console.log(response.data.articles);
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
    <Wrap>
      <form action="/" method="get" onSubmit={handleSubmit}>
        <label htmlFor="api-search">
          <VisualHidden>Search posts</VisualHidden>
        </label>
        {/* eslint-disable-next-line prettier/prettier */}
        <input
          id="api-search"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search posts"
          name="inputS"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'loading...' : 'Search'}
        </button>
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
      </form>
      {arts.length <= 0 ? null : (
        <Cards
          searchQuery={searchQuery}
          API_KEY={API_KEY}
          sortBy={sortBy}
          pageSize={pageSize}
          currentPage={currentPage}
          setArts={setArts}
          setIsLoading={setIsLoading}
          setCurrentPage={setCurrentPage}
          arts={arts}
        />
      )}
    </Wrap>
  );
};

export default SectionApi;
