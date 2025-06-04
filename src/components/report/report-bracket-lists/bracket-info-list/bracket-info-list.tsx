import { useSelector } from 'react-redux';
import { bracketDataSelector } from '../../../../store';

export const BracketInfoList = () => {
  const bracketData = useSelector(bracketDataSelector)!;
  const brackets = bracketData.bracket;
  return (
    <>
      {brackets.map(({ bracketName }, i) => {
        return (
          <div key={`bracketInfo${i}`}>
            - кронштейн {bracketName} (точечный элемент {i + 2})
          </div>
        );
      })}
    </>
  );
};
