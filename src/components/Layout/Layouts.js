import React, { Component } from "react";
import { connect } from "react-redux";

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

        <Toolbar isAuth={this.props.isAuthenticated} toggle={this.toggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          toggle={this.toggleHandler}
          isAuth={this.props.isAuthenticated}
        />
        <main className={LayoutStyle.Content}>{this.props.children}</main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
isAuthenticated:state.auth.token !== null
};
}



export default connect(mapStateToProps)(Layouts)
