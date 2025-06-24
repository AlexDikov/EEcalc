import { createSlice } from '@reduxjs/toolkit';

export const wallFormSlice = createSlice({
  name: 'wallForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setWallForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
    resetWallForm: (state) => {
      return { ...state, formData: undefined };
    },
  },
});

export const { setWallForm, resetWallForm } = wallFormSlice.actions;

export const wallFormReducer = wallFormSlice.reducer;
