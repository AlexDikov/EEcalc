import { configureStore } from '@reduxjs/toolkit';
import { objectFormReducer } from './object-form/slices';
import { secondFormReducer } from './second-form/slices';
import { thirdFormReducer } from './third-form/slices';
import { fourthFormReducer } from './fourth-form/slices';

export const store = configureStore({
  reducer: {
    objectForm: objectFormReducer,
    secondForm: secondFormReducer,
    thirdForm: thirdFormReducer,
    fourthForm: fourthFormReducer,
  },
});
