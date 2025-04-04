import { useWatch } from 'react-hook-form';
import { WallItemFormProps } from '../../../types';
import { Checkbox } from '../checkbox';
import { Input } from '../input';
import { Select } from '../select';

export const WallItemForm = ({ title, subtitle, material, nameOptions, densityOptions }: WallItemFormProps) => {
  const isSP = useWatch({ name: `is${material}Sp` });

  const hasSecondInsulation = useWatch({ name: 'hasSecondInsulation' });

  const shouldRender = material !== 'concrete' && isSP && nameOptions && densityOptions;

  const materialName = useWatch({ name: `${material}Name` });

  const densityOps = densityOptions
    ? Object.entries(densityOptions).find((item) => item[0] === materialName)
    : undefined;

  const density = densityOps ? densityOps[1] : undefined;

  return (
    <>
      <h2>{title}</h2>
      {hasSecondInsulation && <h4>{subtitle}</h4>}
      {shouldRender && (
        <Select
          name={`${material}Name`}
          options={nameOptions}
          placeholder="Тип материала"
          errorMessage="Выберете тип"
        />
      )}
      {shouldRender && density && (
        <Select
          name={`${material}Density`}
          options={density}
          placeholder="Плотность материала"
          errorMessage="Выберете плотность"
        />
      )}
      <Input name={`${material}Thickness`} placeholder="Толщина, мм" type="number" isRequired={true} />
      <Input
        name={`${material}HeatConduction`}
        placeholder="Теплопроводность, Вт/м²"
        type="number"
        max={3}
        isRequired={true}
      />
      <Checkbox name={`is${material}Sp`} label="учитывать СП 50.133300.2012" />
    </>
  );
};
