import { SET_GAMES_TO_DISPLAY } from "../constants";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_GAMES_TO_DISPLAY:
      return action.payload;
    default:
      return state;
  }
};
