import { useFormContext } from 'react-hook-form';
import { RangeProps } from '../../../types';

export const Range = (props: RangeProps) => {
  const { register } = useFormContext();

  return <input {...register(props.name)} type="range" />;
};
