import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 1,
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page = state.page + 1;
    },
    prevPage: (state) => {
      state.page = state.page - 1;
    },
  },
});

export const { nextPage, prevPage } = pageSlice.actions;

export default pageSlice.reducer;
