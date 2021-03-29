import React from "react";
import DrawerToggleStyle from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return (
    <div className={DrawerToggleStyle.DrawerToggle} onClick={props.toggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggle;
