import { FourthForm, RootState } from '../../../types';

export const fourthFormSelector = (state: RootState): { formData: FourthForm | undefined } => state.fourthForm;
