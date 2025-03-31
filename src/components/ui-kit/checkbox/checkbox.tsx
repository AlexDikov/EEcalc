import { useFormContext } from 'react-hook-form';
import { CheckboxProps } from '../../../types';

export const Checkbox = (props: CheckboxProps) => {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <input {...register(props.name)} type="checkbox" />
    </>
  );
};
