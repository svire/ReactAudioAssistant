import React from "react";

import classes from "./SideDrawer.module.css";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
//side drawer nije dio toolbara
const SideDrawer = (props) => {
  let sideClasses = [classes.SideDrawer];
  if (props.show) {
    sideClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <nav className={sideClasses.join(" ")}>
      <div className={classes.NavigationItems}>
        <ul>
          <div className={classes.Drawer}>
            <NavigationItem link="/">Home</NavigationItem>
          </div>
          <div>
            <NavigationItem link="/glitter">Glitter</NavigationItem>
          </div>
          <div>
            <NavigationItem link="/products">Products</NavigationItem>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;
