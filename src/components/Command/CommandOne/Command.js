import React from "react";

import classes from "./Command.module.css";

const Command = (props) => {
  return (
    <div className={classes.One}>
      <div className={classes.Row}>
        <div>{props.time}</div>
        <div>{props.type}</div>
      </div>
      <div className={classes.Row2}>
        <div>✉</div>
        <div>{props.command}</div>
      </div>
    </div>
  );
};

export default Command;
