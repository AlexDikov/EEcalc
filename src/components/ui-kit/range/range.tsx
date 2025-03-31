import { useFormContext } from 'react-hook-form';
import { RangeProps } from '../../../types';

export const Range = ({ name, minValue, maxValue, defaultValue }: RangeProps) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(name, { valueAsNumber: true })}
      type="range"
      min={minValue}
      max={maxValue}
      defaultValue={defaultValue}
    />
  );
};
