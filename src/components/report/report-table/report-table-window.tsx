import { useSelector } from 'react-redux';
import { objectDataSelector, systemDataSelector } from '../../../store';
import { useReportCalculations } from '../../../utils';
import { TableType } from '../../../types';

export const ReportTableWindow: React.FC<TableType> = ({ tableType }) => {
  const objectData = useSelector(objectDataSelector);
  const systemData = useSelector(systemDataSelector);

  const { wallType } = objectData!;
  const { windowLength = 0, wallArea = 0, concreteWallArea = 0, concreteWindowLength = 0 } = systemData!;
  const { windowLoss, concreteWindowLoss, concreteLinearLoss, linearLoss, qPercent } = useReportCalculations();

  return (
    <tr key="table1-4">
      <th>{wallType !== 'frame' ? 2 : 3}</th>
      <td>Оконный откос</td>
      <td>Линейный </td>
      {wallType === 'monolith' || tableType === 'concrete' ? (
        <>
          <td>{(concreteWindowLength / concreteWallArea).toFixed(3)} м/м²</td>
          <td> {concreteWindowLoss.toFixed(3)} Вт/(м²°С)</td>
          <td>{concreteLinearLoss.toFixed(3)}</td>
          <td>{(concreteLinearLoss / qPercent).toFixed(1)}</td>
        </>
      ) : (
        <>
          <td>{(windowLength / (concreteWallArea! + wallArea)).toFixed(3)} м/м²</td>
          <td> {windowLoss.toFixed(3)}</td>
          <td>{linearLoss.toFixed(3)}</td>
          <td>{(linearLoss / qPercent).toFixed(1)}</td>
        </>
      )}
    </tr>
  );
};
