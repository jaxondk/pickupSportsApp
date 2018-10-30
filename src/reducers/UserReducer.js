import { USER_LOGGED_IN, CREATE_GAME, REMOVE_GAME, UPDATE_USER_LOCATION, ATTEND_GAME, LEAVE_GAME, } from '../constants';
import { removeElement } from '../utilities';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGamesIds: [],
  attendingGamesIds: [],
  gamesOfInterestIds: [],
  location: null,
};

// also removes game from gamesOfInterestIds
const attend = (state, game) => {
  state.attendingGamesIds.push(game.id);
  removeElement(state.gamesOfInterestIds, game.id);
}

// also adds game to gamesOfInterestIds
const leave = (state, game) => {
  removeElement(state.attendingGamesIds, game.id);
  state.gamesOfInterestIds.push(game.id);
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case CREATE_GAME:
      const game = action.payload;
      //If this user created this game, add it to their hosted games
      if (game.hostId === state.id) {
        state.hostedGamesIds.push(game.id);
        state.attendingGamesIds.push(game.id);
      }
      return {...state};
    case REMOVE_GAME:
      game = action.payload;
      if (game.hostId === state.id) {
        removeElement(state.hostedGamesIds, game.id);
      }
      removeElement(state.gamesOfInterestIds, game.id);
      removeElement(state.attendingGamesIds, game.id);
      return {...state };
    case UPDATE_USER_LOCATION:
      return { ...state, location: action.payload };
    case ATTEND_GAME:
      attend(state, action.payload);
      return {...state };
    case LEAVE_GAME:
      leave(state, action.payload);
      return {...state };
    default:
      return state;
  }
};
