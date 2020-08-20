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

  const check_commandss = () => {
    const list_commands = commands.map((item) =>
      item.command.replace("*", "").trim().toLowerCase().trim()
    );

    let count = 0;
    let command_exist = false;

    //alert(list_commands);

    //red flag ima
    list_commands.map((item) => {
      if (transcript.includes(item)) {
        command_exist = true;
      } else {
        console.log("ashundjal");
        // command_exist;
      }
    });

    let imanema = command_exist ? "ima" : "nema";

    //alert(imanema);

    return command_exist;
  };

  const proba = (item) => {
    //alert(    "Pozvana je: " +    transcript.replace(item, "").trim() +       "......sa argumentom: " +        item    );
  };
  /*
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
*/
  const [end, setEnd] = useState(false);

  const EndOfSentence = () => {
    //ovde jedino provjeratvati jel pogresna ili nepostojeca komanda
    // ima li je uopste

    let command_exist = check_commandss();
    alert("IMAL" + command_exist);
    if (command_exist) {
      props.addError(
        "INVALID_COMMAND",
        "Invalid command: " + transcript.replace("Zulu", "")
      );
    }
    setEnd(true);
  };

  const [reset, setReset] = useState(false);

  const setResetTrue = () => {
    setReset(true);
  };

  const commands = [
    /*{
      //Pozvana je: red flower......sa argumentom: flower
      command: "red *", //|| "turn *",
      callback: (item) => proba(item), //drugo ne radi
    },
*/
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
      //check_commands();

      resetTranscript();
      setEnd(false);
    } else if (reset) {
      resetTranscript();
      setReset(false);
    }
  }, [end, reset]);

  return (
    <div className={classes.Container}>
      <div className={classes.First}></div>
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
