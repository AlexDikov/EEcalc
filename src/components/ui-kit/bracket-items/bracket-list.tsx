import { memo } from 'react';
import { BracketListProps } from '../../../types';
import { BracketItemForm } from '../bracket-item-form';

export const BracketList = memo(({ fields, remove }: BracketListProps) => {
  return (
    <>
      {fields.map((field: { id: string }, index: number) => (
        <BracketItemForm
          bracketMaterialName={`bracket.${index}.bracketMaterial`}
          bracketTypeName={`bracket.${index}.bracketType`}
          bracketSelectName={`bracket.${index}.bracketSelect`}
          bracketQuantityName={`bracket.${index}.bracketQuantity`}
          remove={remove}
          key={field.id}
          index={index}
        />
      ))}
    </>
  );
});
