import React from "react";
import classes from "./Product.module.css";

//import Pic1 from "../../../assets/todd1.png";
import Aux from "../../../hoc/Aux";

const Product = (props) => {
  return (
    <Aux>
      <div className={classes.Product}>
        <div className={classes.ProductIn}>
          <div className={classes.DivPic}>
            <img
              className={classes.Pic}
              src={require(`../../../assets/${props.picture}`)}
              alt="ale"
            />
          </div>
          <div className={classes.Info}>
            <p className={classes.ProductText}>{props.name}</p>
            <p className={classes.ProductPrice}>{props.price} €</p>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default Product;
