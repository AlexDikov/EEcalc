import { ObjectForm, FourthForm, SecondForm, ThirdForm } from './index';

export type RootState = {
  objectForm: { formData: ObjectForm | undefined };
  secondForm: { formData: SecondForm | undefined };
  thirdForm: { formData: ThirdForm | undefined };
  fourthForm: { formData: FourthForm | undefined };
};
