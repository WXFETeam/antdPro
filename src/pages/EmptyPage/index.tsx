import React from "react";
import styles from "./index.less";
import { Tabs } from "antd";
import AssetsAlteration from './components/AssetsAlteration'
const { TabPane } = Tabs;

class App extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Tabs onChange={this.handleClick} type="card">
    <TabPane tab="交易所资产变动表" key="1">
      <AssetsAlteration></AssetsAlteration>
    </TabPane>
    <TabPane tab="交易所资产负债表" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="资产划拨表" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-menu-demo-horizontal">
      <App />
    </div>
  </div>
);
