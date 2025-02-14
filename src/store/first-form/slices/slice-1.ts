import { createSlice } from '@reduxjs/toolkit';

export const firstForm = createSlice({
  name: 'firstForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setFirstForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
  },
});

export const { setFirstForm } = firstForm.actions;

export const firstFormReducer = firstForm.reducer;
