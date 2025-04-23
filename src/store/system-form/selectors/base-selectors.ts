import { RootState, SystemFormType } from '../../../types';

export const systemDataSelector = (state: RootState): SystemFormType | undefined => state.systemForm.formData;
