import { useReportCalculations } from '../../../utils';

export const ReportTableEnd = () => {
  const { qPercent } = useReportCalculations();

  return (
    <tr key="table-summ">
      <th></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        {' '}
        ∑ = {(qPercent * 100).toFixed(3)}(1/R<sub>пр</sub>)
      </td>
      <td></td>
    </tr>
  );
};
