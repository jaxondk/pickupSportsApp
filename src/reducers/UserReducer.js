import { USER_LOGGED_IN, CREATE_GAME, REMOVE_GAME, UPDATE_USER_LOCATION, UPDATE_SUBSCRIBED_SPORTS, UPDATE_ATTENDING_GAMES, UPDATE_GAMES_OF_INTEREST } from '../constants';
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
      }
      return {...state};
    case REMOVE_GAME:
      console.log('state before remove',state);
      game = action.payload
      if (game.hostId === state.id) {
        console.log('should remove id from hostedGamesIds')
        removeElement(state.hostedGamesIds, game.id);
      }
      removeElement(state.attendingGamesIds, game.id);
      sport = state.subscribedSports.find((sport) => (sport.name === game.sportName));
      if (sport) {
        removeElement(sport.gamesOfInterestIds, game.id)
      }
      console.log('state after remove', state);
      return {...state};
    case UPDATE_USER_LOCATION:
      return { ...state, location: action.payload };
    case UPDATE_SUBSCRIBED_SPORTS:
      return { ...state, subscribedSports: action.payload };
    case UPDATE_ATTENDING_GAMES:
      return { ...state, attendingGamesIds: action.payload };
    // case UPDATE_GAMES_OF_INTEREST:
    //   return { ...state, subscribedSports: [...state.subscribedSports, action.payload] };
    default:
      return state;
  }
};
