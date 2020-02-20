import React from "react";
import styles from "./index.less";
import { Table, Divider, Tag } from "antd";

const columns = [
  {
    title: "时间",
    dataIndex: "name",
    key: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "币种",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "手续费收入",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "交易返佣",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
       111
      </span>
    )
  },
  {
    title: "异常转热",
    dataIndex: "address1",
    key: "address1"
  },
  {
    title: "异常转热返还",
    dataIndex: "address2",
    key: "address2"
  },
  {
    title: "矿工费",
    dataIndex: "address3",
    key: "address3"
  },
  {
    title: "用户充值",
    dataIndex: "address4",
    key: "address4"
  },
  {
    title: "用户提现",
    dataIndex: "address5",
    key: "address5"
  },
  {
    title: "公司投入",
    dataIndex: "address6",
    key: "address6"
  },
  {
    title: "活动投入",
    dataIndex: "address7",
    key: "address7 "
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default () => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table columns={columns} dataSource={data} />
    </div>
  </div>
);
