import React from "react";
import classes from "./Toggler.module.css";

const Toggler = (props) => {
  return (
    <button onClick={props.toggle} className={classes.Buttone}>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
    </button>
  );
};

export default Toggler;
