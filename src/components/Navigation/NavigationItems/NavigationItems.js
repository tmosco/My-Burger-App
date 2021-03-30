import React from "react";
import NavigationItemStyle from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={NavigationItemStyle.NavigationItems}>
      <NavigationItem link="/" exact >Burger Builder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
      <NavigationItem link="/auth">Sign Up</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
