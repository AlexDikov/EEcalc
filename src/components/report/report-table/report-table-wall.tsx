import { useSelector } from 'react-redux';
import { objectDataSelector } from '../../../store';
import { useReportCalculations } from '../../../utils';
import { TableType } from '../../../types';

export const ReportTableWall: React.FC<TableType> = ({ tableType }) => {
  const objectData = useSelector(objectDataSelector);

  const { wallType, hasConcreteWall } = objectData!;
  const { qPercent, u1, u2, blockShare, concreteShare } = useReportCalculations();

  const u = tableType === 'concrete' || wallType === 'monolith' ? u1 : u2;

  return (
    <>
      {wallType === 'frame' ? (
        <>
          <tr key="table-wall">
            <th>1</th>
            <td>{hasConcreteWall ? 'Стена' : 'Перекрытие'}</td>
            <td>Плоский 1 </td>
            <td>{concreteShare.toFixed(3)} м²/м²</td>
            <td>{u1.toFixed(3)} Вт/(м²°С)</td>
            <td>{(u1 * concreteShare).toFixed(3)}</td>
            <td>{((u1 * concreteShare) / qPercent).toFixed(1)}</td>
          </tr>
          <tr key="table-wall2">
            <th>2</th>
            <td>Стена</td>
            <td>Плоский 2</td>
            <td>{blockShare.toFixed(3)} м²/м²</td>
            <td>{u2.toFixed(3)} Вт/(м²°С)</td>
            <td>{(u2 * blockShare).toFixed(3)}</td>
            <td>{((u2 * blockShare) / qPercent).toFixed(1)}</td>
          </tr>
        </>
      ) : (
        <tr key="table-wall">
          <th>1</th>
          <td>{'Стена'}</td>
          <td>Плоский </td>
          <td>1 м²/м²</td>
          <td>{u.toFixed(3)} Вт/(м²°С)</td>
          <td>{u.toFixed(3)}</td>
          <td>{(u / qPercent).toFixed(1)}</td>
        </tr>
      )}
    </>
  );
};
