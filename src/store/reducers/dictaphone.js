import * as actionTypes from "../actions/actionTypes";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const initialState = {
  mode: false,
  transcript: "aaas",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DIC:
      if (!state.mode) {
        SpeechRecognition.startListening({continuous: true});
      } else {
        SpeechRecognition.stopListening();
      }
      return {
        ...state,
        mode: !state.mode,
      };

    case actionTypes.TURN_OFF:
      return {
        ...state,
        mode: false,
      };

    default:
      return state;
  }
};

export default reducer;

/*
import * as actionTypes from "../actions/actionTypes";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const initialState = {
  mode: false,
  transcript: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_DIC:
      if (!state.mode) {
        SpeechRecognition.startListening({continuous: true});
      } else {
        SpeechRecognition.stopListening();
      }
      return {
        ...state,
        mode: !state.mode,
      };

    default:
      return state;
  }
};

export default reducer;

*/

/*
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  mode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TURN_ON:
      return {
        mode: true,
      };
    /*
      return {
        ...state,
      };
      

     default:
      return state;
  }
};

export default reducer;
*/
