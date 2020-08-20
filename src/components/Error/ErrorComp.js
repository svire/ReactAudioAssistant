import React from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index";
import classes from "./ErrorComp.module.css";
import Error from "./ErrorOne/Error";

const ErrorComp = (props) => {
  /*
  const dodaj = () => {
    props.addError("WrongLink", "No such link");
  };
  */

  const pStyle = {
    color: "red",
    fontSize: "20px",
  };

  return (
    <div className={classes.Container}>
      <h1>Errors</h1>
      {props.errors.length === 0 ? (
        <p style={pStyle}>No errors yet...</p>
      ) : (
        props.errors.map((item) => {
          return (
            <Error
              key={item.time}
              time={item.time}
              type={item.type}
              message={item.message}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.error.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addError: (type2, message) => dispatch(actions.setError(type2, message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComp);

/*
import React from "react";
import {connect} from "react-redux";

import * as actions from "../../store/actions/index";
import classes from "./ErrorComp.module.css";
import Error from "./ErrorOne/Error";

const ErrorComp = (props) => {
  const dodaj = () => {
    props.addError("WrongLink", "No such link");
  };

  return (
    <div className={classes.Container}>
      <h1>Errors</h1>
      <h3>ZADNJA GRESKA JE {props.errors[props.errors.length - 1].message}</h3>
      <p>{props.errors.length}</p>
      {props.errors.map((item) => {
        return (
          <Error time={item.time} type={item.type} message={item.message} />
        );
      })}
      <button onClick={() => dodaj()}>ZADODAJ</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errors: state.error.errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addError: (type2, message) => dispatch(actions.setError(type2, message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorComp);
*/
