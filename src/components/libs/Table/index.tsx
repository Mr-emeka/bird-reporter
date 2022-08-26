import {TableContainer, TableHead} from "./style";
import React, {FC} from "react";
import {isElement} from "../../../helpers";


export interface ITableData {
  key: string | number;
  sn?: number;

  [key: string]: any;
}

export interface TableColumn {
  title: string;
  dataIndex: string;
  key: string;
}

export interface TableProps {
  columns: TableColumn[];
  dataSource: ITableData[];

  [key: string]: any;
}


const Table: FC<TableProps> = ({
                                 columns,
                                 dataSource,
                                 evenStyled
                               }) => {
  return (
    <TableContainer
      evenStyled={evenStyled}
    >
      <table>
        <thead>
        <tr data-testid="table-head-tr">
          {columns && columns.length > 0 ? (
            columns.map((column) => (
              <TableHead
                data-testid="table-head-th"
                key={column.key}
              >
                <div>{column.title}</div>
              </TableHead>
            ))
          ) : (
            <></>
          )}
        </tr>
        </thead>
        <tbody data-testid="table-body">
        {dataSource?.length > 0 &&
          dataSource.map((data) => (
            <tr
              data-testid="table-body-tr"
              key={data.key}
              ref={data?.ref}
            >
              {columns && columns.length > 0 ? (
                columns.map((column, index) => {
                  return isElement(data[column.dataIndex]) ? (
                    <td key={index}>{data[column.dataIndex]}</td>
                  ) : (
                    <td key={index}>
                      {/*if you are not returning an element*/}
                      <div>{data[column.dataIndex]}</div>
                    </td>
                  );
                })
              ) : (
                <></>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;
