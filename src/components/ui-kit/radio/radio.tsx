import { useFormContext } from 'react-hook-form';
import { RadioProps } from '../../../types/';

export const Radio = ({ label, name, value }: RadioProps) => {
  const { register } = useFormContext();
  return (
    <>
      <input type="radio" {...register(name)} value={value} />
      <label htmlFor={value}>{label}</label>
    </>
  );
};
