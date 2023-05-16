import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './features/PageSlice';
import privateInfoReducer from './features/PrivateInfoSlice';
export const store = configureStore({
  reducer: {
    page: pageReducer,
    privateInfo: privateInfoReducer,
  },
});

export default store;
