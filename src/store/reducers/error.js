import * as actionTypes from "../actions/actionTypes";

const initialState = {
  errors: [],
  lastError: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      const time = new Date()
        .toLocaleTimeString()
        .replace("AM", "")
        .replace("PM", "")
        .trim();
      const type = action.type2;
      const message = action.message;

      state.errors = [
        ...state.errors,
        {time: time, type: type, message: message},
      ];
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;

/*

const initialState = {
  errors: [
    {
      time: "12:00",
      type: "WRONG_LINK",
      message: "THERE IS NO SUCH LINK",
    },
    {
      time: "12:01",
      type: "WRONG_LINK",
      message: "THERE IS NO SUCH LINK",
    },
  ],
  lastError: "",
};
*/
