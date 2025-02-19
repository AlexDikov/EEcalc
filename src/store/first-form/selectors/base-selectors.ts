import { FirstForm, RootState } from '../../../types';

export const firstFormSelector = (state: RootState): { formData: FirstForm | undefined } => state.firstForm;
