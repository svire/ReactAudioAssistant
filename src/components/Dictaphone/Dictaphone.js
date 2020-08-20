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
  //end of the sentence
  const [end, setEnd] = useState(false);
  //reset transcript
  const [reset, setReset] = useState(false);
  const setResetTrue = () => {
    setReset(true);
  };

  //navigate through applicaiton
  const change_path = (link) => {
    let current_link = link === "home" ? "/" : "/" + link;
    const all_paths = routes.map((item) => item.path);
    if (all_paths.includes(current_link)) {
      push(current_link);
    } else {
      props.addError("WRONG_LINK", "No such route: /" + current_link);
    }
  };

  //checks if transcript of dictaphone match some of the predefine commands
  const check_commandss = () => {
    const list_commands = commands.map((item) =>
      item.command
        .replace("*", "")
        .replace("item", "")
        .trim()
        .toLowerCase()
        .trim()
    );
    let command_exist = false;
    let clean_trancript = transcript.replace(/Zulu/g, "");
    list_commands.map((item) => {
      if (clean_trancript.includes(item)) {
        command_exist = true;
      } else {
        console.log("no");
      }
      return true;
    });
    return command_exist;
  };

  //this function will be call, when transcript matchs word "Zulu" and then check is there
  const endOfSentence = () => {
    let clean_trancript = transcript.replace(/Zulu/g, "").trim();
    let command_exist = check_commandss();
    if (!command_exist) {
      props.addError("INVALID_COMMAND", "Invalid command: " + clean_trancript);
    } else {
      props.fireCommand("SUCC_COMM", clean_trancript);
    }
    setEnd(true);
  };

  const showMe = (item) => {
    const searchTerm = item.trim();
    if (searchTerm === "everything" || searchTerm === "all") {
      props.setSearchTerm("");
    } else {
      props.setSearchTerm(item);
    }
  };
  const position = {
    first: 0,
    second: 1,
    third: 2,
  };
  //add item to cart , quanitity one
  //https://regex101.com/r/cU5lC2/1
  const addToCart = () => {
    let productid = props.location.pathname.substring(10);
    let link = props.location.pathname;
    let regex = "(/products/-).*";
    const cartitem = props.products.find((item) => item.id === productid);
    if (link.match(regex)) {
      props.onAddToCart(cartitem, 1);
    } else {
      props.addError("WRONG_CONTEXT?", "ADD TO CART WHAT? ");
    }
  };

  //sad ces dobaciti item first second third
  const showDetails = (item) => {
    let trazeniniz = props.products;
    if (props.search !== "") {
      trazeniniz = trazeniniz.filter((item) =>
        item.name.toLowerCase().includes(props.search.toLowerCase())
      );
    }
    if (position.hasOwnProperty(item)) {
      const index = position[item];
      const link = "/products/" + trazeniniz[index].id;
      push(link);
    } else {
      props.addError(
        "WRONG_CONTEXT?",
        `Show product details array[${item}]???`
      );
    }
  };

  const removeFromCart = (name) => {
    //alert(name);
    const cartItems = props.cartItems;
    if (cartItems > 0) {
      let delete_item = props.cart.find((item) =>
        item.product.name.toLowerCase().includes(name.toLowerCase())
      );
      props.onRemoveFromCart(delete_item.product);
    } else {
      props.addError("CART_PROBLEM", "Cart is empty");
    }
  };

  const commands = [
    {
      command: "look for *",
      callback: (item) => showMe(item),
    },
    {
      command: "remove *",
      callback: (item) => removeFromCart(item),
    },
    {
      command: "open *",
      callback: (item) => showDetails(item),
    },
    {
      command: "add to cart",
      callback: () => addToCart(),
    },
    {
      command: "navigate *", //|| "turn *",
      callback: (item) => change_path(item),
    },

    {
      command: "show me *", //|| "turn *",
      callback: (item) => change_path(item),
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
      callback: () => endOfSentence(),
    },
  ];

  const {transcript, resetTranscript} = useSpeechRecognition({commands}, true);

  useEffect(() => {
    if (end) {
      resetTranscript();
      setEnd(false);
    } else if (reset) {
      resetTranscript();
      setReset(false);
    }
  }, [end, reset]);

  //
  return (
    <div className={classes.Container}>
      <div className={classes.First}>
        <button onClick={() => change_path("alo")}>DELETE</button>
      </div>
      <div className={classes.Second}>
        {props.mode === false ? (
          <p>Click the button to start recording:</p>
        ) : (
          <p>{transcript}</p>
        )}
      </div>
      <div className={classes.Flexcenter}>
        <Button toggle={() => props.toggleDic()} active={!props.mode}></Button>
      </div>
    </div>
  );
};
//<Button toggle={() => check_commandss()}>CHECK COMMANDS</Button>
const mapStateToProps = (state) => {
  return {
    mode: state.dicta.mode,
    products: state.product.products,
    search: state.product.searchTerm,
    cart: state.cart.cart,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDic: () => dispatch(actions.toggleDic()),
    addError: (type2, message) => dispatch(actions.setError(type2, message)),
    fireCommand: (type, comm) => dispatch(actions.firedCommand(type, comm)),
    setSearchTerm: (search) => dispatch(actions.setSearchTerm(search)),
    onAddToCart: (product, quantity) =>
      dispatch(actions.addToCart(product, quantity)),
    onRemoveFromCart: (product) => dispatch(actions.removeFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dictaphone);
