import { BracketFormType, RootState } from '../../../types';

export const bracketFormSelector = (state: RootState): { formData: BracketFormType | undefined } => state.bracketForm;
