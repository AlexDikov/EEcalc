import { bracketMaterialOptions, bracketNameOptions, bracketTypeOptions } from '../../../constants';
import { BracketItemFormProps } from '../../../types';
import { Input } from '../input';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';

export const BracketItemForm = ({
  bracketMaterialName,
  bracketTypeName,
  bracketSelectName,
  bracketQuantityName,
  index,
  remove,
}: BracketItemFormProps) => {
  return (
    <div>
      <RadioGroup name={bracketMaterialName} options={bracketMaterialOptions} />
      <RadioGroup name={bracketTypeName} options={bracketTypeOptions} />
      <Select
        name={bracketSelectName}
        placeholder="Тип кронштейна"
        options={bracketNameOptions}
        errorMessage="Выберете тип"
      />
      <Input name={bracketQuantityName} placeholder="Шт" type="number" />
      <button
        type="button"
        onClick={() => {
          remove(index);
        }}
      >
        Удалить
      </button>
    </div>
  );
};
