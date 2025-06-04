import { BracketFormType, RootState } from '../../../types';

export const bracketDataSelector = (state: RootState): BracketFormType | undefined => state.bracketForm.formData;
