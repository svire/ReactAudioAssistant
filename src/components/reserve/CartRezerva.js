import React from "react";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Cart.module.css";
//import Button from "../UI/Button/Button";
import Button from "../UI/Button/Button";
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
    props.onAddToCart(maliniz[0], 1);
  };
  const addToCartfunc2 = () => {
    //console.log(maliniz[0]);
    props.onAddToCart(maliniz[1], 1);
  };
  const addToCartfunc3 = () => {
    //console.log(maliniz[0]);
    props.onAddToCart(maliniz[2], 1);
  };

  const remove = () => {
    props.onRemoveFromCart(maliniz[0]);
  };
  const remove2 = () => {
    props.onRemoveFromCart(maliniz[1]);
  };

  const removeFromCart = (item) => {
    //  props.onRemoveFromCart(item);

    props.onRemoveFromCart(item.product);
    // console.log(item.product);
  };

  const backToShop = () => {
    console.log("alej wolyey");
    props.history.push("/");
  };

  const updateCart = (item) => {
    let name = `quantity` + item.product.name;
    let quantity = document.getElementById(name).value;
    props.onUpdateCart(item.product, quantity);
  };

  if (props.cartItems < 1) {
    return (
      <div style={{textAlign: "center", marginTop: "100px"}}>
        <h1>Cart is empty</h1>
        <Button btnType='Danger' clicked={backToShop}>
          Back to shopping
        </Button>
        <button onClick={addToCartfunc}>DODAJ NESTO</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className={classes.ProCont}>
          <h1>Cart</h1>
          <div style={{padding: "100px"}}>
            <table className={classes.Table}>
              <thead>
                <tr>
                  <th>Product name</th>
                  <th style={{textAlign: "center"}}>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {props.cart.map((item) => {
                  return (
                    <tr className={classes.Products}>
                      <td>{item.product.name}</td>
                      <td className={classes.Qua}>
                        <input
                          min='1'
                          max='10'
                          className={classes.Inpu}
                          type='number'
                          id={`quantity` + item.product.name}
                          onChange={() => updateCart(item)}
                          value={item.quantity}
                        />
                      </td>

                      <td>{item.product.price}</td>
                      <td>{item.quantity * item.product.price}</td>
                      <td>
                        <button
                          style={{
                            color: "red",
                            backgroundColor: "transparent",
                            border: "none",
                            fontSize: "22px",
                            cursor: "pointer",
                          }}
                          onClick={() => removeFromCart(item)}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td colSpan='3' style={{textAlign: "right"}}>
                    Total price:
                  </td>
                  <td>
                    <strong>{props.totalPrice}$</strong>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Button btnType='Danger' clicked={backToShop}>
            Back to shop
          </Button>
          {props.cartItems > 0 ? (
            <Button btnType='Danger' clicked={() => props.onClearCart()}>
              Clear Cart
            </Button>
          ) : null}

          <Button btnType='Success' disabled='true'>
            Checkout
          </Button>
          <Button btnType='Success'>Checkout</Button>
        </div>

        <h1></h1>
        <h1>{props.totalPrice}$</h1>
        <button onClick={addToCartfunc}>DODAJ NESTO</button>
        <button onClick={addToCartfunc2}>DODAJ NESTO</button>
        <button onClick={addToCartfunc3}>DODAJ NESTO</button>
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
  }
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
    cartItems: state.cart.cartItems,
    // products: state.product.products,
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
