import React from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Cart.module.css";

let maliniz = [
  {
    description: "Cool shirt in my book, take a look. 100% Cotton",
    name: "Pink Suit T-SHIRT",
    price: 25,
    profile_pic: "todd.png",
    sizes: ["S", "M", "L", "XL"],
    id: "-M0n3brKq92clBnW9xwr"
  },
  {
    description: "Cool and confy underwear. 100% Cotton",
    name: "OLSEN UNDERWEAR PINK",
    price: 20,
    profile_pic: "todd1.png",
    sizes: ["S", "M", "L", "XL"],
    id: "-M0n3sg_m4SK-I3-isiV"
  },
  {
    description: "Cool and confy underwear. 100% Cotton",
    name: "OLSEN UNDERWEAR BLUE",
    price: 20,
    profile_pic: "todd2.png",
    sizes: ["S", "M", "L", "XL"],
    id: "-M0n419OtDEsDp8ARFNX"
  }
];

const Cart = (props) => {
  const addToCartfunc = () => {
    //console.log(maliniz[0]);
    props.onAddToCart(maliniz[0], 12);
  };
  const addToCartfunc2 = () => {
    //console.log(maliniz[0]);
    props.onAddToCart(maliniz[1], 1);
  };

  const remove = () => {
    props.onRemoveFromCart(maliniz[0]);
  };
  const remove2 = () => {
    props.onRemoveFromCart(maliniz[1]);
  };

  const updateCart = () => {
    props.onUpdateCart(maliniz[0], 3);
  };

  return (
    <div>
      <h1>Cart Details</h1>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Product</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((item) => {
            return (
              <tr>
                <td>{item.product.name}</td>
                <td> {item.quantity}</td>
                <td>{item.product.price}</td>
                <td>{item.quantity * item.product.price}</td>
                <td>X</td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>{props.totalPrice}</td>
          </tr>
        </tbody>
      </table>

      <div className={classes.CartDiv}>
        <div className={classes.ImgDiv}>
          <img
            className={classes.ImgCart}
            src={require("../../assets/cart.png")}
          />
        </div>
        <div className={classes.CartItems}>{props.cartItems}</div>
      </div>

      <h1></h1>
      <h1>{props.totalPrice}$</h1>
      <button onClick={addToCartfunc}>DODAJ NESTO</button>
      <button onClick={addToCartfunc2}>DODAJ NESTO</button>
      <button onClick={() => props.onClearCart()}>CLEAR CART </button>
      <button onClick={remove}>REMOVE ITEM1 </button>
      <button onClick={remove2}>REMOVE ITEM2 </button>
      <button onClick={updateCart}>UPDATE CART</button>

      {props.cart.map((item) => {
        return (
          <p>
            Naziv artikla {item.product.name}, cijene {item.product.price} u
            ovoliko komada:{item.quantity}
          </p>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    cartItems: state.cart.cartItems,
    products: state.product.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (product, quantity) =>
      dispatch(actions.addToCart(product, quantity)),
    onClearCart: () => dispatch(actions.clearCart()),
    onRemoveFromCart: (product) => dispatch(actions.removeFromCart(product)),
    onUpdateCart: (product, quantity) =>
      dispatch(actions.updateCart(product, quantity))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
