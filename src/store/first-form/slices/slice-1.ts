import { createSlice } from '@reduxjs/toolkit';

export const firstFormSlice = createSlice({
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

export const { setFirstForm } = firstFormSlice.actions;

export const firstFormReducer = firstFormSlice.reducer;
