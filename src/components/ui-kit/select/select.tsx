import { useFormContext } from 'react-hook-form';
import { SelectProps } from '../../../types/select-props';

export const Select = (props: SelectProps) => {
  const { register } = useFormContext();

  return (
    <select {...register(props.name)} id={props.name}>
      <option value="">{props.placeholder}</option>
      {props.options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
