import { configureStore } from '@reduxjs/toolkit';
import { firstFormReducer } from './first-form/slices';
import { secondFormReducer } from './second-form/slices';
import { thirdFormReducer } from './third-form/slices';
import { fourthFormReducer } from './fourth-form/slices';

export const store = configureStore({
  reducer: {
    firstForm: firstFormReducer,
    secondForm: secondFormReducer,
    thirdForm: thirdFormReducer,
    fourthForm: fourthFormReducer,
  },
});
