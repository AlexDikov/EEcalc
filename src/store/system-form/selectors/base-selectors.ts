import { RootState, SystemFormType } from '../../../types';

export const systemFormSelector = (state: RootState): { formData: SystemFormType | undefined } => state.systemForm;
