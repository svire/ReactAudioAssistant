import * as actionTypes from "../actions/actionTypes";

const initialState = {
  commands: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCC_COMMAND:
      const time = new Date()
        .toLocaleTimeString()
        .replace("AM", "")
        .replace("PM", "")
        .trim();
      const type = action.type;
      const command = action.command;

      state.commands = [
        ...state.commands,
        {time: time, type: type, command: command},
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
  commands: [
    {
      time: "13:00",
      type: "SUCC_COMMAND",
      command: "Changed route to: something",
    },
    {
      time: "14:00",
      type: "SUCC_COMMAND",
      command: "Changed route to: something",
    },
  ],
};

*/
