import React from "react";
import NavigationItemStyle from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={NavigationItemStyle.NavigationItems}>
      <NavigationItem link="/" exact>
        Burger Builder
      </NavigationItem>
     {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null} 
      {props.isAuthenticated ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
        ) : (
          <NavigationItem link="/auth">Sign In</NavigationItem>
      )}
    </ul>
  );
};

export default NavigationItems;
