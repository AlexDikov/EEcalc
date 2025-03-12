import { ObjectForm, FourthForm, SecondForm, ThirdForm } from './index';

export type RootState = {
  objectForm: { formData: ObjectForm };
  secondForm: { formData: SecondForm | undefined };
  thirdForm: { formData: ThirdForm | undefined };
  fourthForm: { formData: FourthForm | undefined };
};
