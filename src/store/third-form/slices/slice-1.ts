import { createSlice } from '@reduxjs/toolkit';

export const thirdFormSlice = createSlice({
  name: 'thirdForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setThirdForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
  },
});

export const { setThirdForm } = thirdFormSlice.actions;

export const thirdFormReducer = thirdFormSlice.reducer;
