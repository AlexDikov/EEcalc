import { ObjectForm, RootState } from '../../../types';

export const objectDataSelector = (state: RootState): { formData: ObjectForm | undefined } => state.objectForm;
