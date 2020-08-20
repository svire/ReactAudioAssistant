import * as actionTypes from "../actions/actionTypes";

const initialState = {
  current: "/",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LINK:
      return {
        current: action.link,
      };
    default:
      return state;
  }
};

export default reducer;
