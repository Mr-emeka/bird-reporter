import styled from "styled-components";

export interface TableContainerProps {
  evenStyled?: boolean;
}


export const TableContainer = styled.div<TableContainerProps>`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th {
    padding: 5px;
    text-align: left;
    background: #FFFFFF;
  }
  td {
    padding: 10px 5px;
    text-align: left;
    & > div {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 164.4%;
      /* or 26px */
  
      color: #011F4B;
    }
  }
  tbody tr {
    cursor: pointer;
  }
  tbody tr:nth-child(even) {
    background: ${(props) => props.evenStyled && "#FFFFFF"};
  }
`;

export const TableHead = styled.th`
  & > div {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 164.4%;
    /* or 26px */   
    color: #011F4B;
  }
`;
