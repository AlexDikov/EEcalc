import { useFormContext } from 'react-hook-form';
import { SelectProps } from '../../../types';
import { ErrorMessage } from '../error-message/error-message';

export const Select = (props: SelectProps) => {
  const { register } = useFormContext();

  return (
    <>
      <select {...register(props.name, { required: 'Выберете опцию' })} id={props.name}>
        <option value="">{props.placeholder}</option>
        {props.options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <ErrorMessage name={props.name} />
    </>
  );
};
