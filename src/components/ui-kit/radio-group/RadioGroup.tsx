import { RadioGroupProps } from '../../../types';
import { Radio } from '../radio';

export const RadioGroup = (props: RadioGroupProps) => {
  return (
    <>
      {props.options.map((item) => (
        <Radio name={props.name} value={item.value} label={item.label} key={item.value} />
      ))}
    </>
  );
};
