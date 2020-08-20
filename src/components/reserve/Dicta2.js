import React from "react";
import {useSpeechRecognition} from "react-speech-recognition";
import {useState, useEffect} from "react";
import Button from "./Button/Button";
import classes from "./Dicta.module.css";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import {routes} from "../Routes/Routes";

const Dictaphone = (props) => {
  const {push} = props.history;

  const Change_path = (link) => {
    let current_link = link === "home" ? "/" : "/" + link;

    const all_paths = routes.map((item) => item.path);
    if (all_paths.includes(current_link)) {
      push(current_link);
    } else {
      props.addError("WRONG_LINK", "No such route: /" + current_link);
    }
  };

  const [krivi, setKrivi] = useState([]);

  const check_commandss = () => {
    const list_commands = commands.map((item) =>
      item.command.replace("*", "").trim().toLowerCase().trim()
    );
    setKrivi(list_commands);
  };

  // go to   navigate   show me   reset   turn off  zulu

  const check_commands = () => {
    const list_commands = commands.map((item) =>
      item.command.replace("*", "").trim().toLowerCase().trim()
    );
    const contains = list_commands.indexOf(transcript) > -1;
    if (contains) {
      alert("ima");
    } else if (
      contains === false &&
      transcript !== "" &&
      transcript !== undefined
    ) {
      props.addError(
        "WRONG_COMMAND",
        "No such command: " + transcript.replace("Zulu", "")
      );
    }
  };

  const [end, setEnd] = useState(false);

  const EndOfSentence = () => {
    setEnd(true);
  };

  const [reset, setReset] = useState(false);

  const setResetTrue = () => {
    setReset(true);
  };

  const commands = [
    {
      command: "go to *", //|| "turn *",
      callback: (item) => Change_path(item),
    },
    {
      command: "navigate *", //|| "turn *",
      callback: (item) => Change_path(item),
    },
    {
      command: "show me *", //|| "turn *",
      callback: (item) => Change_path(item),
    },
    {
      command: "reset",
      callback: () => setResetTrue(),
    },
    {
      command: "turn off",
      callback: () => props.toggleDic(), //SpeechRecognition.stopListening(),
    },
    {
      command: "zulu",
      callback: () => EndOfSentence(),
    },
  ];
  const {transcript, resetTranscript} = useSpeechRecognition({commands}, true);
  useEffect(() => {
    if (end) {
      check_commands();
      resetTranscript();
      setEnd(false);
    } else if (reset) {
      resetTranscript();
      setReset(false);
    }
  }, [end, reset]);

  return (
    <div className={classes.Container}>
      <div className={classes.First}>
        {krivi.length > 0 ? (
          krivi.map((item) => {
            return (
              <div>
                <span>{item}</span>
              </div>
            );
          })
        ) : (
          <p>nema</p>
        )}
      </div>
      <div className={classes.Second}>
        {props.mode === false ? (
          <p>Click the button to start recording:</p>
        ) : (
          <p>{transcript}</p>
        )}
      </div>
      <div className={classes.Flexcenter}>
        <Button toggle={() => check_commandss()}>CHECK COMMANDS</Button>
        <Button toggle={() => props.toggleDic()} active={!props.mode}></Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.dicta.mode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDic: () => dispatch(actions.toggleDic()),
    addError: (type2, message) => dispatch(actions.setError(type2, message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictaphone);
