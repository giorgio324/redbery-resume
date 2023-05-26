import { createSlice } from '@reduxjs/toolkit';
import { addPrivateInfoToLocalStorage } from '../utils/Localstorage';
import { getPrivateInfoFromLocalStorage } from '../utils/Localstorage';
const initialState = {
  name: getPrivateInfoFromLocalStorage().name || '',
  surname: getPrivateInfoFromLocalStorage().surname || '',
  email: getPrivateInfoFromLocalStorage().email || '',
  phone_number: getPrivateInfoFromLocalStorage().phone_number || '',
  about_me: getPrivateInfoFromLocalStorage().about_me || '',
  image: getPrivateInfoFromLocalStorage().image || '',
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
