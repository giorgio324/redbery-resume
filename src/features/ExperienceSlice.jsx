import { createSlice } from '@reduxjs/toolkit';
import {
  addEducationToLocalStorage,
  getEducationFromLocalStorage,
} from '../utils/Localstorage';
const initialState = {
  experiences: getEducationFromLocalStorage()?.experiences || [
    {
      position: '',
      employer: '',
      start_date: '',
      due_date: '',
      description: '',
    },
  ],
};

const experienceSlice = createSlice({
  name: 'experiences',
  initialState,
  reducers: {
    updateExperience: (state, { payload }) => {
      const { index, fieldName, value } = payload;
      state.experiences[index] = {
        ...state.experiences[index],
        [fieldName]: value,
      };
      addEducationToLocalStorage(state);
    },
    addExperience: (state) => {
      state.experiences.push({
        position: '',
        employer: '',
        start_date: '',
        due_date: '',
        description: '',
      });
      addEducationToLocalStorage(state);
    },
    clearExperience: (state) => {
      state.experiences = [
        {
          position: '',
          employer: '',
          start_date: '',
          due_date: '',
          description: '',
        },
      ];
    },
  },
});

export const { updateExperience, addExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
