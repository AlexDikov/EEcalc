import { createSlice } from '@reduxjs/toolkit';

export const systemFormSlice = createSlice({
  name: 'systemForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setSystemForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
    resetSystemForm: (state) => {
      return { ...state, formData: undefined };
    },
  },
});

export const { setSystemForm, resetSystemForm } = systemFormSlice.actions;

export const systemFormReducer = systemFormSlice.reducer;
