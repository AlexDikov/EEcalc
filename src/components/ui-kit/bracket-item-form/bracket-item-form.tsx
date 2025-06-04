import { useSelector } from 'react-redux';
import { bracketMaterialOptions, bracketTypeOptions, bracketBaseOptions } from '../../../constants';
import { BracketItemFormProps } from '../../../types';
import { bracketOptionsSeeker } from '../../../utils/bracket-calculation/bracket-calculation';
import { Input } from '../input';
import { RadioGroup } from '../radio-group';
import { Select } from '../select';
import { useState } from 'react';
import { objectDataSelector } from '../../../store';

export const BracketItemForm = ({
  bracketMaterialName,
  bracketTypeName,
  bracketSelectName,
  bracketQuantityName,
  bracketBaseName,
  index,
  remove,
}: BracketItemFormProps) => {
  const [bracketMaterial, setBracketMaterial] = useState('aluminium');
  const [bracketType, setBracketType] = useState('light');

  const handleBracketMaterial = (data: string) => {
    setBracketMaterial(data);
  };
  const handleBracketType = (data: string) => {
    setBracketType(data);
  };

  const objectData = useSelector(objectDataSelector);

  const wallType = objectData?.wallType;

  return (
    <div>
      <RadioGroup name={bracketMaterialName} options={bracketMaterialOptions} onChange={handleBracketMaterial} />
      <RadioGroup name={bracketTypeName} options={bracketTypeOptions} onChange={handleBracketType} />
      <Select
        name={bracketSelectName}
        placeholder="Тип кронштейна"
        options={bracketOptionsSeeker(bracketMaterial, bracketType)!}
        errorMessage="Выберете тип"
      />
      <Input name={bracketQuantityName} placeholder="Шт" type="number" />
      {wallType === 'frame' && <RadioGroup name={bracketBaseName} options={bracketBaseOptions} />}
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
