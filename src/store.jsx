import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './features/PageSlice';
import privateInfoReducer from './features/PrivateInfoSlice';
import experienceReducer from './features/ExperienceSlice';
export const store = configureStore({
  reducer: {
    page: pageReducer,
    privateInfo: privateInfoReducer,
    experience: experienceReducer,
  },
});

export default store;
