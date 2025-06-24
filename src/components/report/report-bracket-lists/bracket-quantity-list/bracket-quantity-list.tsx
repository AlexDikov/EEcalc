import { useSelector } from 'react-redux';
import { bracketDataSelector, systemDataSelector } from '../../../../store';

export const BracketQuantityList = () => {
  const systemData = useSelector(systemDataSelector);
  const bracketData = useSelector(bracketDataSelector)!;

  const brackets = bracketData.bracket;
  const { concreteWallArea = 0, wallArea = 0 } = systemData!;

  return (
    <>
      {brackets.map(({ bracketMaterial, bracketName, bracketType, bracketQuantity }, key) => {
        return (
          <div key={key}>
            - {bracketMaterial === 'aluminium' ? 'алюминиевый' : 'стальной'}{' '}
            {bracketType === 'light' ? 'рядовой' : 'межэтажный'} кронштейн {bracketName} -{' '}
            {(bracketQuantity / (concreteWallArea + wallArea)).toFixed(2)} шт/м²
          </div>
        );
      })}
    </>
  );
};
