import React from "react";
import { Menu} from "antd";
import styles from '../index.less'
import AssetsAlterationForm from './AssetsAlterationForm'
import TableBasic from '../TableBasic'
class AssetsAlteration extends React.Component {
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
      // <div>222</div>
      <div>
        <AssetsAlterationForm></AssetsAlterationForm>
        <TableBasic></TableBasic>
      </div>
    
    );
  }
}

export default () => (
  <div className={styles.container}>
    <div id="components-menu-demo-horizontal">
      <AssetsAlteration />
    </div>
  </div>
);
