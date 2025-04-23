import { RootState, WallFormType } from '../../../types';

export const wallDataSelector = (state: RootState): WallFormType | undefined => state.wallForm.formData;
