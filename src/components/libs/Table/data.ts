import {TableColumn} from "./index";

export const dashboardTableCol: TableColumn[] = [
  {
    title: "Date",
    dataIndex: "created",
    key: "created",
  },
  {
    title: "Gateway",
    dataIndex: "gateway",
    key: "gateway",
  },
  {
    title: "Transaction Id",
    dataIndex: "paymentId",
    key: "paymentId",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
];
