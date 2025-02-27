import { createSlice } from '@reduxjs/toolkit';

export const fourthFormSlice = createSlice({
  name: 'fourthForm',
  initialState: {
    formData: undefined,
  },
  reducers: {
    setFourthForm: (state, action) => {
      return { ...state, formData: action.payload };
    },
  },
});

export const { setFourthForm } = fourthFormSlice.actions;

export const fourthFormReducer = fourthFormSlice.reducer;
