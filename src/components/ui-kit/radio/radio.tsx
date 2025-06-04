import { useFormContext } from 'react-hook-form';
import { RadioProps } from '../../../types/';

export const Radio = ({ label, name, value, onChange }: RadioProps) => {
  const { register } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.value);
  };

  return (
    <>
      <input type="radio" {...register(name)} value={value} onChange={handleChange} />
      <label htmlFor={value}>{label}</label>
    </>
  );
};
