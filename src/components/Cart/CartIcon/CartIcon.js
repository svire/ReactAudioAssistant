import React from "react";
import {connect} from "react-redux";

import classes from "./CartIcon.module.css";

const CartIcon = (props) => {
  return (
    <div className={classes.CartDiv}>
      <div className={classes.ImgDiv}>
        <img
          className={classes.ImgCart}
          src={require("../../../assets/cart.png")}
          alt='ama'
        />
      </div>
      <div className={classes.CartItems}>{props.cartItems}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps)(CartIcon);
