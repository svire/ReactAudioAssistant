import React from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Cart.module.css";

import Table from "./Table/Table";
let maliniz = [
  {
    description: "Cool shirt in my book, take a look. 100% Cotton",
    name: "Pink Suit T-SHIRT",
    price: 25,
    profile_pic: "todd.png",
    sizes: ["S", "M", "L", "XL"],
    id: "-M0n3brKq92clBnW9xwr",
  },
  {
    description: "Cool and confy underwear. 100% Cotton",
    name: "OLSEN UNDERWEAR PINK",
    price: 20,
    profile_pic: "todd1.png",
    sizes: ["S", "M", "L", "XL"],
    id: "-M0n3sg_m4SK-I3-isiV",
  },
  {
    description: "Cool and confy underwear. 100% Cotton",
    name: "OLSEN UNDERWEAR BLUE",
    price: 20,
    profile_pic: "todd2.png",
    sizes: ["S", "M", "L", "XL"],
    id: "-M0n419OtDEsDp8ARFNX",
  },
];

const Cart = (props) => {
  const addToCartfunc = () => {
    //console.log(maliniz[0]);
    props.onAddToCart(maliniz[0], 1); //quantity
  };
  const addToCartfunc2 = () => {
    //console.log(maliniz[0]);
    props.onAddToCart(maliniz[1], 1);
  };

  //remove from cart
  const removeFromCart = (item) => {
    props.onRemoveFromCart(item.product);
  };

  const updateCart = (item) => {
    let name = `quantity` + item.product.name;
    let quantity = document.getElementById(name).value;
    props.onUpdateCart(item.product, quantity);
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className={classes.TableDiv}>
        <Table
          updateCart={updateCart}
          removeFromCart={removeFromCart}
          cart={props.cart}
          totalPrice={props.totalPrice}
        />
      </div>

      <button onClick={addToCartfunc}>DODAJ NESTO</button>
      <button onClick={addToCartfunc2}>DODAJ NESTO</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product, quantity) =>
      dispatch(actions.addToCart(product, quantity)),
    onClearCart: () => dispatch(actions.clearCart()),
    onRemoveFromCart: (product) => dispatch(actions.removeFromCart(product)),
    onUpdateCart: (product, quantity) =>
      dispatch(actions.updateCart(product, quantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
