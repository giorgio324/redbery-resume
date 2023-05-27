import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './features/PageSlice';
import privateInfoReducer from './features/PrivateInfoSlice';
import experienceReducer from './features/ExperienceSlice';
import educationReducer from './features/EducationSlice';
export const store = configureStore({
  reducer: {
    page: pageReducer,
    privateInfo: privateInfoReducer,
    experience: experienceReducer,
    education: educationReducer,
  },
});

export default store;
