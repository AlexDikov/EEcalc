import { useSelector } from 'react-redux';
import { bracketDataSelector, objectDataSelector } from '../../../../store';

export const BracketHeatConductionList = () => {
  const objectData = useSelector(objectDataSelector);
  const bracketData = useSelector(bracketDataSelector)!;

  const brackets = bracketData.bracket;
  const { wallType } = objectData!;

  return (
    <>
      {brackets.map(({ bracketConduction, bracketName, bracketBase }, i) => {
        return (
          <div key={`bracketConduction${i}`}>
            χᵏᵖ<sup>{i + 1}</sup> = {bracketConduction.toFixed(3)} Вт/°С для кронштейна {bracketName}{' '}
            {wallType === 'frame' && `крепление : ${bracketBase === 'concrete' ? 'бетон' : 'блок/кирпич'}`};
          </div>
        );
      })}
    </>
  );
};
