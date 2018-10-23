import { USER_LOGGED_IN, CREATE_GAME, REMOVE_GAME, UPDATE_USER_LOCATION, ATTEND_GAME, LEAVE_GAME, FOLLOW_SPORT, UNFOLLOW_SPORT, defaultFilter } from '../constants';
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

// also removes game from gamesOfInterestIds
const attend = (state, game) => {
  sport = state.subscribedSports.find((sport) => (sport.name === game.sportName));
  sport.attendingGamesIds.push(game.id);
  removeElement(sport.gamesOfInterestIds, game.id);
}

// also adds game to gamesOfInterestIds
const leave = (state, game) => {
  sport = state.subscribedSports.find((sport) => (sport.name === game.sportName));
  removeElement(sport.attendingGamesIds, game.id);
  sport.gamesOfInterestIds.push(game.id);
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
        //If they created a game for a sport they aren't yet following, follow the sport automatically
        sport = state.subscribedSports.find((sport) => (sport.name === game.sportName));
        if (!sport) {
          sport = {
            name: game.sportName,
            filter: defaultFilter,
            gamesOfInterestIds: [],
            attendingGamesIds: [],
          };
          state.subscribedSports.push(sport);
        }
        sport.attendingGamesIds.push(game.id);
      }
      return {...state};
    case REMOVE_GAME:
      game = action.payload;
      if (game.hostId === state.id) {
        removeElement(state.hostedGamesIds, game.id);
      }
      sport = state.subscribedSports.find((sport) => (sport.name === game.sportName));
      if (sport) {
        removeElement(sport.gamesOfInterestIds, game.id);
        removeElement(sport.attendingGamesIds, game.id);
      }
      return {...state };
    case UPDATE_USER_LOCATION:
      return { ...state, location: action.payload };
    case ATTEND_GAME:
      attend(state, action.payload);
      return {...state };
    case LEAVE_GAME:
      leave(state, action.payload);
      return {...state };
    case FOLLOW_SPORT:
      state.subscribedSports.push(action.payload);
      return {...state };
    case UNFOLLOW_SPORT:
      removeElement(state.subscribedSports, action.payload);
      return {...state };
    default:
      return state;
  }
};
