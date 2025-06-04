import {
  aluminiumBracketOptions,
  aluminiumHeavyBracketOptions,
  steelBracketOptions,
  steelHeavyBracketOptions,
} from '../../constants';
import { BracketFormType } from '../../types';

export const bracketDensity = (wallArea = 0, concreteWallArea = 0, bracketsArray: BracketFormType) => {
  let brackets = 0;
  bracketsArray.bracket.forEach((item) => (brackets += item.bracketQuantity!));
  return (brackets / (wallArea + concreteWallArea)).toFixed(2);
};

export const bracketOptionsSeeker = (bracketMaterial: string, bracketType: string) => {
  if (bracketMaterial === 'aluminium' && bracketType === 'light') {
    return aluminiumBracketOptions;
  }
  if (bracketMaterial === 'aluminium' && bracketType === 'heavy') {
    return aluminiumHeavyBracketOptions;
  }
  if (bracketMaterial === 'steel' && bracketType === 'light') {
    return steelBracketOptions;
  }
  if (bracketMaterial === 'steel' && bracketType === 'heavy') {
    return steelHeavyBracketOptions;
  }
};
