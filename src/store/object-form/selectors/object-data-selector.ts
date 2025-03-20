import { ObjectFormType, RootState } from '../../../types';

export const objectDataSelector = (state: RootState): { formData: ObjectFormType | undefined } => state.objectForm;
