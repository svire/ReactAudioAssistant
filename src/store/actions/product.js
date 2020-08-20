import * as actionTypes from "./actionTypes";
import Axios from "axios";
// need to define an action creator function, which will create an action object that can be
//processed by the data store to alter the data it contains
export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsStart());
    Axios.get("https://asdasd-b0c2a.firebaseio.com/products.json")
      .then((response) => {
        let newarray = [];
        for (let key in response.data) {
          newarray.push({
            ...response.data[key],
            id: key,
          });
        }
        dispatch(fetchProductsSuccess(newarray));
      })
      .catch((error) => {
        dispatch(fetchProductsFail(error));
      });
  };
};

export const fetchProductsStart = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_START,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    products: products,
  };
};

export const fetchProductsFail = (error) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAIL,
    error: error,
  };
};

//export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const setSearchTerm = (searchTerm) => {
  return {
    type: actionTypes.SET_SEARCH_TERM,
    searchTerm: searchTerm,
  };
};
