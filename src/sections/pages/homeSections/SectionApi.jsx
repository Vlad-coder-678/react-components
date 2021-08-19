import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// eslint-disable-next-line object-curly-newline
import { setPages, setTotalArts, setArts, setIsLoading, setSearchQuery } from './sectionApiSlice';

import Cards from './apiComponents/Cards';
import axios from '../../../axios/axiosInstance';
import SelectSortBy from './apiComponents/SelectSortBy';
import SelectPageSize from './apiComponents/SelectPageSize';
import SelectCurrentPage from './apiComponents/SelectCurrentPage';

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

const SectionApi = () => {
  const apiKey = useSelector((state) => state.api.apiKey);
  const sortBy = useSelector((state) => state.api.sortType);
  const pageSize = useSelector((state) => state.api.pageSize);
  const currentPage = useSelector((state) => state.api.currentPage);
  const arts = useSelector((state) => state.api.arts);
  const isLoading = useSelector((state) => state.api.isLoading);
  const searchQuery = useSelector((state) => state.api.searchQuery);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    try {
      const response = await axios.get(
        `/everything?q=${searchQuery}&apiKey=${apiKey}&sortBy=${sortBy}&pageSize=${pageSize}&page=${currentPage}`
      );
      dispatch(setTotalArts(response.data.totalResults));
      dispatch(setPages());
      dispatch(setArts(response.data.articles));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
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
          required
        />
        <SelectSortBy />
        <SelectPageSize />
        <SelectCurrentPage />
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
