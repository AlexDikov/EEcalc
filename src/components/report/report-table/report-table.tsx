import { TableType } from '../../../types';
import { ReportTableAnchor } from './report-table-anchor';
import { ReportTableBrackets } from './report-table-brackets';
import { ReportTableEnd } from './report-table-end';
import { ReportTableHead } from './report-table-head';
import { ReportTableWall } from './report-table-wall';
import { ReportTableWindow } from './report-table-window';

export const ReportTable: React.FC<TableType> = ({ tableType }) => {
  return (
    <table>
      <ReportTableHead />
      <tbody>
        <ReportTableWall tableType={tableType} />
        <ReportTableWindow tableType={tableType} />
        <ReportTableAnchor tableType={tableType} />
        <ReportTableBrackets tableType={tableType} />
        <ReportTableEnd />
      </tbody>
    </table>
  );
};
