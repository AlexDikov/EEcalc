import { configureStore } from '@reduxjs/toolkit';
import { firstFormReducer } from './first-form/slices/slice-1';

export const store = configureStore({
  reducer: {
    firstForm: firstFormReducer,
  },
});
