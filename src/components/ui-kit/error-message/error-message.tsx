import { useFormContext } from 'react-hook-form';
import { ErrorProps } from '../../../types';

export const ErrorMessage = (props: ErrorProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const name = props.name;

  return (
    <>
      <p>{typeof errors[name]?.message === 'string' && errors[name]?.message}</p>
    </>
  );
};
