import { useWatch } from 'react-hook-form';
import { WallItemFormProps } from '../../../types';
import { Checkbox } from '../checkbox';
import { Input } from '../input';
import { Select } from '../select';

export const WallItemForm = ({ title, subtitle, material, nameOptions, densityOptions }: WallItemFormProps) => {
  const isSP = useWatch({ name: `is${material}Sp` });

  const hasSecondInsulation = useWatch({ name: 'hasSecondInsulation' });

  const shouldRenderSpOptions = material !== 'concrete' && isSP && nameOptions && densityOptions;

  const materialName = useWatch({ name: `${material}Name` });

  const densityOps = () => {
    for (const key in densityOptions) {
      if (key === materialName) {
        return densityOptions[key];
      }
    }
  };

  const density = densityOps();

  return (
    <>
      <h2>{title}</h2>
      {hasSecondInsulation && <h4>{subtitle}</h4>}
      {shouldRenderSpOptions && (
        <Select
          name={`${material}Name`}
          options={nameOptions}
          placeholder="Тип материала"
          errorMessage="Выберете тип"
        />
      )}
      {shouldRenderSpOptions && density && (
        <Select
          name={`${material}Density`}
          options={density}
          placeholder="Плотность материала"
          errorMessage="Выберете плотность"
        />
      )}
      <Input name={`${material}Thickness`} placeholder="Толщина, мм" type="number" />
      <Input name={`${material}HeatConduction`} placeholder="Теплопроводность, Вт/м²" type="number" max={3} />
      <Checkbox name={`is${material}Sp`} label="учитывать СП 50.133300.2012" />
    </>
  );
};
