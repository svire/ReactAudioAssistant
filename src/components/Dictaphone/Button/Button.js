import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  const active = props.active;
  const stylee = active
    ? `${classes.Button} ${classes.Play}`
    : `${classes.Button} ${classes.Stop}`;

  return (
    <div className={classes.Background}>
      <button onClick={props.toggle} className={stylee}>
        {active ? "▶" : "◼"}
      </button>
    </div>
  );
};

export default Button;

/*
<button className={`${classes.Button}`{active?}  classes.Button}>{active ? "▶" : "◼"}</button>
      <div className={`${classes.Container} ${classes.Opa}`}></div>

*/
