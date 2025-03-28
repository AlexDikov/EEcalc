import { useFormContext } from 'react-hook-form';
import { RangeProps } from '../../../types';

export const Range = (props: RangeProps) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(props.name, { valueAsNumber: true })}
      type="range"
      min={props.minValue}
      max={props.maxValue}
      defaultValue={props.defaultValue}
    />
  );
};
