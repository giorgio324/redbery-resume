import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  surname: '',
  email: '',
  phone_number: '',
  about_me: '',
  image: '',
};

const privateInfoSlice = createSlice({
  name: 'privateInfo',
  initialState,
  reducers: {
    updatePrivateInfo: (state, { payload }) => {
      const { fieldName, value } = payload;
      state[fieldName] = value;
      localStorage.setItem('privateInfo', JSON.stringify(state));
    },
  },
});

export const { updatePrivateInfo } = privateInfoSlice.actions;

export default privateInfoSlice.reducer;
