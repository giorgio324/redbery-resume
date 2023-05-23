import { createSlice } from '@reduxjs/toolkit';
import { addPrivateInfoToLocalStorage } from '../utils/Localstorage';
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
      addPrivateInfoToLocalStorage(state);
    },
    clearPrivateInfo: (state) => {
      state.name = '';
      state.surname = '';
      state.email = '';
      state.phone_number = '';
      state.about_me = '';
      state.image = '';
    },
  },
});

export const { updatePrivateInfo, clearPrivateInfo } = privateInfoSlice.actions;

export default privateInfoSlice.reducer;
