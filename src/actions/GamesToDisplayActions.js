import { SET_GAMES_TO_DISPLAY } from "../constants";

export const setGamesToDisplay = (gamesArray) => ({type: SET_GAMES_TO_DISPLAY, payload: gamesArray});