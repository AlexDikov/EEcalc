import { RootState, WallFormType } from '../../../types';

export const wallFormSelector = (state: RootState): { formData: WallFormType | undefined } => state.wallForm;
