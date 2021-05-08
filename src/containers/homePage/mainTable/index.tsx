import React from 'react';
import {
  Table,
  SelectAllCheckboxRowHeadind,
  SelectAllCheckboxWrapper,
  CheckboxWrapper,
  CheckboxLabel,
  Checkbox,
  ServiceNameData,
  StatusWrapper,
  DetailsTableData,
  DetailsIcon
} from './styles';

interface TableData {
  patientName: string;
  serviceName: string;
  visitDateAndTime: string;
  dueDate: string;
  orderID: string;
  status: { value: string; label: string };
}

interface MainTableProps {
  tableData: TableData[];
}

const MainTable = ({ tableData }: MainTableProps): JSX.Element => {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <SelectAllCheckboxRowHeadind>
              <SelectAllCheckboxWrapper>
                <Checkbox id="selectAll" type="checkbox" />
                <CheckboxLabel htmlFor="selectAll">Select all</CheckboxLabel>
              </SelectAllCheckboxWrapper>
            </SelectAllCheckboxRowHeadind>
            <th>Patient name</th>
            <th>Service name</th>
            <th>Visit date and time</th>
            <th>Due date</th>
            <th>Order ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!!tableData?.length &&
            tableData.map(({ patientName, serviceName, visitDateAndTime, dueDate, orderID, status }: TableData) => (
              <tr>
                <td>
                  <CheckboxWrapper>
                    <Checkbox id={orderID} type="checkbox" />
                    <CheckboxLabel htmlFor={orderID} />
                  </CheckboxWrapper>
                </td>
                <td>{patientName}</td>
                <td>
                  <ServiceNameData service={serviceName}>{serviceName}</ServiceNameData>
                </td>
                <td>{visitDateAndTime}</td>
                <td>{dueDate}</td>
                <td>{orderID}</td>
                <td>
                  <StatusWrapper status={status.value}>{status.label}</StatusWrapper>
                </td>
                <DetailsTableData>
                  <DetailsIcon src="assets/icons/details.svg" alt="" />
                </DetailsTableData>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default MainTable;
