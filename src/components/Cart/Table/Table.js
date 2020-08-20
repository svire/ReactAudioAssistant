import React from "react";
import classes from "./Table.module.css";

const Table = (props) => {
  return (
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
        {props.cart.length === 0 ? (
          <tr>
            <td colSpan='4'>
              <p className={classes.Warning}>Cart is empty</p>
            </td>
          </tr>
        ) : (
          props.cart.map((item) => {
            return (
              <tr key={item.id} className={classes.Products}>
                <td>{item.product.name}</td>
                <td className={classes.Qua}>
                  <input
                    key={item.id}
                    min='1'
                    max='10'
                    className={classes.Inpu}
                    type='number'
                    id={`quantity` + item.product.name}
                    onChange={() => props.updateCart(item)}
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
                    onClick={() => props.removeFromCart(item)}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })
        )}

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
  );
};

export default Table;
