import React, { Component } from "react";

import LayoutStyle from "./Layouts.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layouts extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };
  toggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        {/* <div>Toolbar, SideDrawer,Backdrop</div> */}

        <Toolbar toggle={this.toggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          toggle={this.toggleHandler}
        />
        <main className={LayoutStyle.Content}>{this.props.children}</main>
      </>
    );
  }
}

export default Layouts;
