import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  experience: [{ job: 'dev', employer: 'joe' }],
};

const experienceSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    updateExperience: (state, { payload }) => {
      const { index, fieldName, value } = payload;
      state.experience[index] = {
        ...state.experience[index],
        [fieldName]: value,
      };
    },
    addExperience: (state) => {
      state.experience.push({ job: '', employer: '' });
    },
  },
});

export const { updateExperience, addExperience } = experienceSlice.actions;
export default experienceSlice.reducer;
