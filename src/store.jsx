import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './features/PageSlice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export default store;
