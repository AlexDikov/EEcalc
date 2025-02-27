import { FirstForm, FourthForm, SecondForm, ThirdForm } from './index';

export type RootState = {
  firstForm: { formData: FirstForm | undefined };
  secondForm: { formData: SecondForm | undefined };
  thirdForm: { formData: ThirdForm | undefined };
  fourthForm: { formData: FourthForm | undefined };
};
