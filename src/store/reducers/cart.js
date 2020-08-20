import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  cart: [],
  cartItems: 0,
  totalPrice: 0,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CART_ADD:
      let prod = action.payload.product;
      let quantity = action.payload.quantity;
      console.log(prod.id);
      let check = state.cart.find((item) => item.product.id === prod.id);
      if (check) {
        check.quantity += quantity;
      } else {
        state.cart = [...state.cart, action.payload];
      }
      state.cartItems += quantity;
      state.totalPrice += prod.price * quantity;

      return {
        ...state,
      };

    case ActionTypes.CART_REMOVE:
      let prod1 = action.payload;

      let selected = state.cart.find(
        (item) => item.product.id === prod1.product.id
      );

      //Cannot read property 'quantity' of undefined
      state.cartItems -= 1 * selected.quantity;
      state.totalPrice -= selected.quantity * selected.product.price;

      state.cart = state.cart.filter((item) => item !== selected);

      console.log(state.cart);
      return {
        ...state,
      };

    case ActionTypes.CART_UPDATE:
      state.cart.find((item) => {
        if (item.product.id === action.payload.product.id) {
          let diff = action.payload.quantity - item.quantity;

          item.quantity = action.payload.quantity;
          state.cartItems += diff;
          state.totalPrice += diff * action.payload.product.price;

          // return action.payload; zbog ovoga nie radilo update drugog proizvoda
        } else {
          // return item;
        }
        return {
          ...state,
        };
      });
      //console.log(state.cart[1]);
      return {
        ...state,
      };

    case ActionTypes.CART_CLEAR:
      return {
        cart: [],
        cartItems: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export default reducer;
