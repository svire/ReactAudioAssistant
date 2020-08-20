import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import {connect} from "react-redux";

import * as actions from "../../../store/actions/index";

const NavigationItems = (props) => (
  <div className={classes.NavigationItems}>
    <ul>
      <NavigationItem link='/'>Home</NavigationItem>
      <NavigationItem link='/cart'>Cart</NavigationItem>
      <NavigationItem link='/products'>Products</NavigationItem>
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    route: state.route.current,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLink: (link) => dispatch(actions.setLink(link)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationItems);
