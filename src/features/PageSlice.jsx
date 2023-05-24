import { createSlice } from '@reduxjs/toolkit';
import {
  addPageNumberToLocalStorage,
  getPageNumberFromLocalStorage,
} from '../utils/Localstorage';
const initialState = {
  page: getPageNumberFromLocalStorage() || 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1;
      addPageNumberToLocalStorage(state.page);
    },
    prevPage: (state) => {
      state.page = state.page - 1;
      addPageNumberToLocalStorage(state.page);
    },
    resetPage: (state) => {
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { nextPage, prevPage, resetPage, setPage } = pageSlice.actions;

export default pageSlice.reducer;
