import React, {Component, useState} from "react";
import classes from "./ProductList.module.css";
import Product from "./Product/Product";
import Spinner from "../UI/Spinner/Spinner";
import {connect} from "react-redux";
import * as actions from "../../store/actions/index";
import {Link} from "react-router-dom";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: ""};
  }

  searchTerme = (e) => {
    this.props.setSearchTerm(e.target.value);
  };

  componentDidMount() {
    if (this.props.products === undefined || this.props.products.length === 0) {
      this.props.onFetchProducts();
    }
  }

  render() {
    let products = <Spinner />;
    if (!this.props.loading) {
      products = this.props.products.map((item) => {
        return (
          <Link key={item.id} to={`/products/${item.id}`}>
            <Product
              key={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
              picture={item.profile_pic}
            />
          </Link>
        );
      });
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    let filterr = <Spinner />;
    if (!this.props.loading) {
      filterr = this.props.products
        .filter((item) =>
          item.name.includes(this.props.search.toLocaleUpperCase())
        )
        .map((item) => {
          return (
            <Link key={item.id} to={`/products/${item.id}`}>
              <Product
                key={item.id}
                name={item.name}
                price={item.price}
                description={item.description}
                picture={item.profile_pic}
              />
            </Link>
          );
        });
    }
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    let showproducts = products;
    if (this.props.search !== "") {
      showproducts === filterr;
    }

    return (
      <div>
        <div className={classes.Input}>
          <input
            className={classes.Zudvi}
            type='text'
            value={this.props.search}
            onChange={this.searchTerme}
          />
        </div>

        {this.props.search !== "" ? (
          <div>
            {filterr.length === 0 ? (
              <div className={classes.NoNo}>No such item.Try again</div>
            ) : (
              <div className={classes.ProCont}>{filterr}</div>
            )}
          </div>
        ) : (
          <div className={classes.ProCont}>{products}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.product.products,
    loading: state.product.loading,
    search: state.product.searchTerm,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => dispatch(actions.fetchProducts()),
    setSearchTerm: (search) => dispatch(actions.setSearchTerm(search)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
