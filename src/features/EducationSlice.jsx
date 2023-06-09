import { createSlice } from '@reduxjs/toolkit';
import {
  addEducationToLocalStorage,
  getEducationFromLocalStorage,
} from '../utils/Localstorage';
const initialState = {
  educations: getEducationFromLocalStorage()?.educations || [
    {
      institute: '',
      degree: '',
      due_date: '',
      description: '',
    },
  ],
  degreeList: [],
};

const educationSlice = createSlice({
  name: 'educations',
  initialState,
  reducers: {
    updateEducation: (state, { payload }) => {
      const { index, fieldName, value } = payload;
      state.educations[index] = {
        ...state.educations[index],
        [fieldName]: value,
      };
      addEducationToLocalStorage(state);
    },
    addEducation: (state) => {
      state.educations.push({
        institute: '',
        degree: '',
        due_date: '',
        description: '',
      });
      addEducationToLocalStorage(state);
    },
    clearEducation: (state) => {
      state.educations = [
        {
          institute: '',
          degree: '',
          due_date: '',
          description: '',
        },
      ];
    },
  },
});

export const { updateEducation, addEducation, clearEducation } =
  educationSlice.actions;
export default educationSlice.reducer;
