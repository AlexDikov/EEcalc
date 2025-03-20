import { ObjectFormType, BracketFormType, WallFormType, SystemFormType } from './index';

export type RootState = {
  objectForm: { formData: ObjectFormType | undefined };
  wallForm: { formData: WallFormType | undefined };
  systemForm: { formData: SystemFormType | undefined };
  bracketForm: { formData: BracketFormType | undefined };
};
