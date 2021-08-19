/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';

export const sectionApiSlice = createSlice({
  name: 'sectionApi',
  initialState: {
    apiKey: '06ce86ba632e44f5a547738589d46c75',
    sortType: 'relevancy',
    pageSize: 5,
    totalArts: 0,
    pages: [],
    currentPage: 1,
    arts: [],
    isLoading: false,
    searchQuery: '',
  },
  reducers: {
    sortBy: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.sortType = action.payload;
    },
    changePageSize: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.pageSize = action.payload;
    },
    setTotalArts: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.totalArts = action.payload;
    },
    setPages: (state) => {
      //   eslint-disable-next-line no-param-reassign
      state.pages = new Array(Math.ceil(state.totalArts / state.pageSize)).fill(1).map((a, i) => i + 1);
    },
    setCurrentPage: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.currentPage = action.payload;
    },
    setArts: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.arts = action.payload;
    },
    setIsLoading: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoading = action.payload;
    },
    setSearchQuery: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.searchQuery = action.payload;
    },
  },
});

// eslint-disable-next-line object-curly-newline
export const { sortBy, changePageSize, setCurrentPage, setPages, setTotalArts, setArts, setIsLoading, setSearchQuery } =
  sectionApiSlice.actions;

export default sectionApiSlice.reducer;
