import { useFormContext } from 'react-hook-form';
import { RangeProps } from '../../../types/range-props';

export const Range = (props: RangeProps) => {
  const { register } = useFormContext();

  return (
    <input {...register(props.value)} type="range">
      {props.name}
    </input>
  );
};
