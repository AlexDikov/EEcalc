import { createSlice } from '@reduxjs/toolkit';

export const bracketFormSlice = createSlice({
  name: 'bracketForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setBracketForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
  },
});

export const { setBracketForm } = bracketFormSlice.actions;

export const bracketFormReducer = bracketFormSlice.reducer;
