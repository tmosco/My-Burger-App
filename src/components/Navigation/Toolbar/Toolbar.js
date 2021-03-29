import React from "react";
import ToolbarStyle from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle"

const Toolbar = (props) => {
  return (
    <header className={ToolbarStyle.Toolbar}>
     <DrawerToggle toggle={props.toggle} text="MENU"/>
      <div className={ToolbarStyle.Logo}>
        <Logo />
      </div>
      <nav className={ToolbarStyle.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
