import * as ActionTypes from "./actionTypes";

export const setLink = (link) => ({
  type: ActionTypes.CHANGE_LINK,
  link: link,
});

export const Links = {
  HOME: "/",
  CART: "cart",
  SHOP: "shop",
};
