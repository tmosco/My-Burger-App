import React from "react";
import NavigationItemStyle from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={NavigationItemStyle.NavigationItem}>
 
      <NavLink to={props.link}exact={props.exact}  activeClassName={NavigationItemStyle.active}>{props.children}</NavLink>
    </li>
  );
};

export default NavigationItem;
