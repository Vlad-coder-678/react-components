import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-unresolved
import apiReducer from '../sections/pages/homeSections/sectionApiSlice';

export default configureStore({
  reducer: {
    api: apiReducer,
  },
});
