import { useFormContext } from 'react-hook-form';
import { SelectProps } from '../../types/select-props';

export const Select = (props: SelectProps) => {
  const { register } = useFormContext();

  return (
    <select {...register(props.name)} id={props.name} required>
      <option>{props.placeholder}</option>
      {props.options}
    </select>
  );
};
