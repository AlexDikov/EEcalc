import { useFormContext } from 'react-hook-form';
import { InputProps } from '../../../types';
import { ErrorMessage } from '../error-message/error-message';

export const Input = ({ name, placeholder, type, min, max, minLength, maxLength }: InputProps) => {
  const { register } = useFormContext();
  const isNumber = type === 'number' ? true : false;

  return (
    <>
      <input
        {...register(name, {
          required: 'Заполните поле',

          ...(min && {
            min: {
              value: min,
              message: `Значение не должно быть менее ${min}`,
            },
          }),

          ...(max && {
            max: {
              value: max,
              message: `Значение не должно превышать ${max}`,
            },
          }),

          ...(minLength && {
            minLength: {
              value: minLength,
              message: `Введите минимум ${minLength} символов`,
            },
          }),

          ...(maxLength && {
            maxLength: { value: maxLength, message: `Введите не более ${maxLength} символов` },
          }),
          valueAsNumber: isNumber,
        })}
        placeholder={placeholder}
        type={type}
        step="any"
      />
      <ErrorMessage name={name} />
    </>
  );
};
