import { useFormContext } from 'react-hook-form';
import { InputProps } from '../../../types';
import { ErrorMessage } from '../error-message/error-message';

export const Input = (props: InputProps) => {
  const { register } = useFormContext();
  const isNumber = props.type === 'number' ? true : false;

  return (
    <>
      <input
        {...register(props.name, {
          required: props.isRequired && 'Заполните поле',

          ...(props.min && {
            min: {
              value: props.min,
              message: `Значение не должно быть менее ${props.min}`,
            },
          }),

          ...(props.max && {
            max: {
              value: props.max,
              message: `Значение не должно превышать ${props.max}`,
            },
          }),

          ...(props.minLength && {
            minLength: {
              value: props.minLength,
              message: `Введите минимум ${props.minLength} символов`,
            },
          }),

          ...(props.maxLength && {
            maxLength: { value: props.maxLength, message: `Введите не более ${props.maxLength} символов` },
          }),
          valueAsNumber: isNumber,
        })}
        placeholder={props.placeholder}
        type={props.type}
      />
      <ErrorMessage name={props.name} />
    </>
  );
};
