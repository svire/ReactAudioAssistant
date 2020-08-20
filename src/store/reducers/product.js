import * as actionTypes from "../actions/actionTypes";
//Actions are processed by data store reducers, which are functions that receive the current contents of
//the data store and an action object and use them to make changes.
const initialState = {
  products: [],
  loading: false,
  searchTerm: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };

    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        loading: false,
      };

    case actionTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };

    default:
      return state;
  }
};

export default reducer;
