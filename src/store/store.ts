import { configureStore } from '@reduxjs/toolkit';
import { objectFormReducer } from './object-form/slices';
import { wallFormReducer } from './wall-form/slices';
import { systemFormReducer } from './system-form/slices';
import { bracketFormReducer } from './bracket-form/slices';

export const store = configureStore({
  reducer: {
    objectForm: objectFormReducer,
    wallForm: wallFormReducer,
    systemForm: systemFormReducer,
    bracketForm: bracketFormReducer,
  },
});
