import React from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index";
import classes from "./CommandComp.module.css";

import Command from "./CommandOne/Command";

const CommandComp = (props) => {
  const pStyle = {
    color: "#34EE20",
    fontSize: "20px",
  };

  return (
    <div className={classes.Container}>
      <h1>Commands</h1>

      {props.commands.length === 0 ? (
        <p style={pStyle}>No commands yet...</p>
      ) : (
        props.commands.map((item) => {
          return (
            <Command
              key={item.time}
              time={item.time}
              command={item.command}
              type={"SUCC_COMMAND"}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    commands: state.command.commands,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fireCommand: (type, comm) => dispatch(actions.firedCommand(type, comm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommandComp);
