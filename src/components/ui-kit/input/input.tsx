import { useFormContext } from 'react-hook-form';
import { InputProps } from '../../../types';

export const Input = (props: InputProps) => {
  const { register } = useFormContext();
  return <input {...register(props.name)} placeholder={props.placeholder} type={props.type} />;
};
