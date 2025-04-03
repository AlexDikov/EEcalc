import { BracketListProps } from '../../../types/bracket-items-props';
import { BracketItemForm } from '../bracket-item-form';

export const BracketList = ({ fields, remove }: BracketListProps) => {
  return (
    <>
      {fields.map((field: { id: string }, index: number) => (
        <BracketItemForm
          bracketMaterialName={`bracketMaterial.${index}`}
          bracketTypeName={`bracketType.${index}`}
          bracketSelectName={`bracketSelect.${index}`}
          bracketQuantityName={`bracketQuantity.${index}`}
          remove={remove}
          key={field.id}
          index={index}
        />
      ))}
    </>
  );
};
