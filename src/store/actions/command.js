import * as ActionTypes from "./actionTypes";

export const firedCommand = (type, command) => ({
  type: ActionTypes.SUCC_COMMAND,
  type2: "SUCC_COMM",
  command: command,
});
