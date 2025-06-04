import { useSelector } from 'react-redux';
import { objectDataSelector, systemDataSelector } from '../../../store';
import { useReportCalculations } from '../../../utils';
import { TableType } from '../../../types';

export const ReportTableAnchor: React.FC<TableType> = ({ tableType }) => {
  const objectData = useSelector(objectDataSelector);
  const systemData = useSelector(systemDataSelector);

  const { wallType } = objectData!;
  const { anchorDepth, anchorQuantity, concreteAnchorQuantity } = systemData!;
  const { qPercent } = useReportCalculations();

  const anchorPcs =
    (tableType === 'concrete' || wallType === 'monolith') && concreteAnchorQuantity
      ? concreteAnchorQuantity
      : anchorQuantity;

  return (
    <tr key="table-anchor">
      <th>{wallType === 'frame' ? 4 : 3}</th>
      <td>Тарельчатый анкер</td>
      <td>Точечный 1</td>
      <td>{anchorPcs} шт/м²</td>
      <td>{anchorDepth} Вт/°С</td>
      <td>{(anchorPcs * +anchorDepth).toFixed(3)} </td>
      <td>{((anchorPcs * +anchorDepth) / qPercent).toFixed(1)}</td>
    </tr>
  );
};
