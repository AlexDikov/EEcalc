import { createSlice } from '@reduxjs/toolkit';

export const objectFormSlice = createSlice({
  name: 'objectForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setObjectForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
  },
});

export const { setObjectForm } = objectFormSlice.actions;

export const objectFormReducer = objectFormSlice.reducer;
