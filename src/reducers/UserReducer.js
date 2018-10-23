import { USER_LOGGED_IN, CREATE_GAME, REMOVE_GAME, UPDATE_USER_LOCATION, UPDATE_SUBSCRIBED_SPORTS, ATTEND_GAME, LEAVE_GAME, UPDATE_GAMES_OF_INTEREST } from '../constants';
import {removeElement} from '../utilities';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGamesIds: [],
  attendingGamesIds: [],
  location: null,
  subscribedSports: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case CREATE_GAME:
      const game = action.payload;
      if (game.hostId === state.id) {
        state.hostedGamesIds.push(game.id)
        state.attendingGamesIds.push(game.id)
      }
      return {...state};
    case REMOVE_GAME:
      game = action.payload
      if (game.hostId === state.id) {
        removeElement(state.hostedGamesIds, game.id);
      }
      removeElement(state.attendingGamesIds, game.id);
      sport = state.subscribedSports.find((sport) => (sport.name === game.sportName));
      if (sport) {
        removeElement(sport.gamesOfInterestIds, game.id)
      }
      return {...state};
    case UPDATE_USER_LOCATION:
      return { ...state, location: action.payload };
    case UPDATE_SUBSCRIBED_SPORTS:
      return { ...state, subscribedSports: action.payload };
    case ATTEND_GAME:
      state.attendingGamesIds.push(action.payload.id);
      return {...state};
    case LEAVE_GAME:
      game = action.payload;
      removeElement(state.attendingGamesIds, game.id);
      return {...state};
    // case UPDATE_GAMES_OF_INTEREST:
    //   return { ...state, subscribedSports: [...state.subscribedSports, action.payload] };
    default:
      return state;
  }
};
