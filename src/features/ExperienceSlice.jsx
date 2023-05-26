import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  experiences: [
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
    },
    addExperience: (state) => {
      state.experiences.push({
        position: '',
        employer: '',
        start_date: '',
        due_date: '',
        description: '',
      });
    },
  },
});

export const { updateExperience, addExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
