import { RootState, SecondForm } from '../../../types';

export const secondFormSelector = (state: RootState): { formData: SecondForm | undefined } => state.secondForm;
