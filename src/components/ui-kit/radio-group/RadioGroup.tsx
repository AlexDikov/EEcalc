import { RadioGroupProps } from '../../../types';
import { Radio } from '../radio';

export const RadioGroup = ({ name, options }: RadioGroupProps) => {
  return (
    <>
      {options.map((item) => (
        <Radio name={name} value={item.value} label={item.label} key={item.value} />
      ))}
    </>
  );
};
