import React from "react";

import classes from "./Error.module.css";

const Error = (props) => {
  return (
    <div className={classes.One}>
      <div className={classes.Row}>
        <div>{props.time}</div>
        <div>{props.type}</div>
      </div>
      <div className={classes.Row2}>
        <div>✉</div>
        <div>{props.message}</div>
      </div>
    </div>
  );
};

export default Error;
