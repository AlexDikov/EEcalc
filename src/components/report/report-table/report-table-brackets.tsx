import { useSelector } from 'react-redux';
import { bracketDataSelector, objectDataSelector, systemDataSelector } from '../../../store';
import { useReportCalculations } from '../../../utils';
import { TableType } from '../../../types';

export const ReportTableBrackets: React.FC<TableType> = ({ tableType }) => {
  const objectData = useSelector(objectDataSelector);
  const bracketData = useSelector(bracketDataSelector)!;
  const systemData = useSelector(systemDataSelector);

  const { wallType, hasConcreteWall } = objectData!;
  const { wallArea = 0, concreteWallArea = 0 } = systemData!;
  const { qPercent } = useReportCalculations();

  const brackets = bracketData.bracket;

  const area = () => {
    if (tableType === 'any') return concreteWallArea + wallArea;
    if (tableType === 'concrete') return concreteWallArea;
    if (tableType === 'block') return wallArea;
    else return 0;
  };

  const lineNumber = (i: number) => {
    if (hasConcreteWall) return 7 + i;
    else return wallType === 'frame' ? 5 + i : 4 + i;
  };

  const itemNumber = (i: number) => (wallType === 'frame' ? 3 + i : 2 + i);

  return (
    <>
      {brackets.map(({ bracketQuantity, bracketConduction, bracketName, bracketBase }, i) => {
        if (bracketBase === tableType || tableType === 'any')
          return (
            <tr key={`table-bracket${i}`}>
              <th>{lineNumber(i)}</th>
              <td>кронштейн {bracketName}</td>
              <td>Точечный {itemNumber(i)}</td>
              <td>{(bracketQuantity / area()).toFixed(3)} шт/м²</td>
              <td>{bracketConduction.toFixed(3)} Вт/°С</td>
              <td>{((bracketConduction * bracketQuantity) / area()).toFixed(3)}</td>
              <td>{((bracketConduction * bracketQuantity) / area() / qPercent).toFixed(1)}</td>
            </tr>
          );
      })}
    </>
  );
};
