import { createSlice } from '@reduxjs/toolkit';

export const secondFormSlice = createSlice({
  name: 'secondForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setSecondForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
  },
});

export const { setSecondForm } = secondFormSlice.actions;

export const secondFormReducer = secondFormSlice.reducer;
