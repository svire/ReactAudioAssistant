import * as ActionTypes from "./actionTypes";

export const setError = (type2, message) => ({
  type: ActionTypes.SET_ERROR,
  type2: type2,
  message: message,
});
