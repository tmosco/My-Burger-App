import React, { useState } from "react";
import { connect } from "react-redux";

import LayoutStyle from "./Layouts.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layouts = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer({
      showSideDrawer: false,
    });
  };
  const toggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <>
      {/* <div>Toolbar, SideDrawer,Backdrop</div> */}

      <Toolbar isAuth={props.isAuthenticated} toggle={toggleHandler} />
      <SideDrawer
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
        toggle={toggleHandler}
        isAuth={props.isAuthenticated}
      />
      <main className={LayoutStyle.Content}>{props.children}</main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layouts);
