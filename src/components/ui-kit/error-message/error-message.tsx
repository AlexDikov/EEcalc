import { useFormContext } from 'react-hook-form';
import { ErrorProps } from '../../../types';

export const ErrorMessage = ({ name }: ErrorProps) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <p>{typeof errors[name]?.message === 'string' && errors[name]?.message}</p>
    </>
  );
};
