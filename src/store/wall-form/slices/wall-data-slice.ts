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
  },
});

export const { setWallForm } = wallFormSlice.actions;

export const wallFormReducer = wallFormSlice.reducer;
