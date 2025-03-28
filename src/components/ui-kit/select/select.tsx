import { useFormContext } from 'react-hook-form';
import { SelectProps } from '../../../types';
import { ErrorMessage } from '../error-message/error-message';

export const Select = ({ name, placeholder, options }: SelectProps) => {
  const { register } = useFormContext();

  return (
    <>
      <select {...register(name, { required: 'Выберете опцию' })} id={name}>
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <ErrorMessage name={name} />
    </>
  );
};
