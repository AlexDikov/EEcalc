import { RootState, ThirdForm } from '../../../types';

export const thirdFormSelector = (state: RootState): { formData: ThirdForm | undefined } => state.thirdForm;
