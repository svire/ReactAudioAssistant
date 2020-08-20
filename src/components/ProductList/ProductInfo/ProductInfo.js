import React, {Component} from "react";
import {connect} from "react-redux";
import classes from "./ProductInfo.module.css";
import Aux from "../../../hoc/Aux";
import Spinner from "../../UI/Spinner/Spinner";
import * as actions from "../../../store/actions/index";

class ProductInfo extends Component {
  componentDidMount = () => {
    if (this.props.products === undefined || this.props.products.length === 0) {
      this.props.onFetchProducts();
    }
  };

  addToCart = (item) => {
    alert(item.name);
    this.props.onAddToCart(item, 1); //quantity
  };

  render() {
    let productid = this.props.location.pathname.substring(10);
    let one = <Spinner />;

    if (!this.props.loading) {
      one = this.props.products
        .filter((item) => item.id === productid) //.filter((item) => item.price === 25)
        .map((item) => {
          return (
            <div key={item} className={classes.ProCont}>
              <div className={classes.DivTopSpace}></div>
              <div className={classes.DivPic}>
                <img
                  className={classes.Pic}
                  src={require(`../../../assets/${item.profile_pic}`)}
                  alt={item.name}
                />
              </div>
              <div key={item.id} className={classes.ProductInfo}>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.price}€</p>
                <p>Available in sizes:</p>
                <select>
                  <option>Pick a size:</option>
                  {item.sizes.map((item) => {
                    return (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
                <button
                  className={classes.Button}
                  onClick={() => this.addToCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        });
    }

    return <Aux>{one}</Aux>;
  }
}
const mapstateToProps = (state) => {
  return {
    products: state.product.products,
    loading: state.product.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    onAddToCart: (product, quantity) =>
      dispatch(actions.addToCart(product, quantity)),
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(ProductInfo);
