import { FieldArrayWithId } from 'react-hook-form';
import { BracketFormType } from './bracket-form';

export type BracketListProps = {
  fields: FieldArrayWithId<BracketFormType, 'bracket', 'id'>[];
  remove: (index: number) => void;
};
