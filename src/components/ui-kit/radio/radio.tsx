import { useFormContext } from 'react-hook-form';
import { RadioProps } from '../../../types/';

export const Radio = (props: RadioProps) => {
  const { register } = useFormContext();
  return (
    <>
      <input type="radio" {...register(props.name)} value={props.value} />
      <label htmlFor={props.value}>{props.label}</label>
    </>
  );
};
