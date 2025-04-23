import { ObjectFormType, RootState } from '../../../types';

export const objectDataSelector = (state: RootState): ObjectFormType | undefined => state.objectForm.formData;
