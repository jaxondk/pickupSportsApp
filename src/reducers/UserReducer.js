import { USER_LOGGED_IN, CREATE_GAME, REMOVE_GAME, UPDATE_USER_LOCATION, UPDATE_SUBSCRIBED_SPORTS, UPDATE_ATTENDING_GAMES, UPDATE_GAMES_OF_INTEREST } from '../constants';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGamesIds: [],
  attendingGames: [],
  location: null,
  subscribedSports: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case CREATE_GAME:
      const game = action.payload;
      console.log('game hostId:', game.hostId);
      console.log('user Id who is hosting:', state.id);
      if (game.hostId === state.id) {
        state.hostedGamesIds.push(game.id)
      }
      return state;
    case REMOVE_GAME:
      game = action.payload
      if (game.hostId === state.id) {
        delete state.hostedGamesIds[game.id]
      }
      delete state.attendingGames[game.id]
      delete state.subscribedSports.gamesOfInterest[game.id]
      return state;
    case UPDATE_USER_LOCATION:
      return { ...state, location: action.payload };
    case UPDATE_SUBSCRIBED_SPORTS:
      return { ...state, subscribedSports: action.payload };
    case UPDATE_ATTENDING_GAMES:
      return { ...state, attendingGames: action.payload };
    // case UPDATE_GAMES_OF_INTEREST:
    //   return { ...state, subscribedSports: [...state.subscribedSports, action.payload] };
    default:
      return state;
  }
};
