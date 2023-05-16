import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'John Doe',
  surname: 'Doe',
  email: 'jhon@mail.com',
  phone_number: '+995 555 55 55 55',
  about_me:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
  image: 'https://picsum.photos/200/300',
};

const privateInfoSlice = createSlice({
  name: 'privateInfo',
  initialState,
  reducers: {},
});

export const { setName } = privateInfoSlice.actions;

export default privateInfoSlice.reducer;
