import { USER_LOGGED_IN, UPDATE_HOSTED_GAMES, UPDATE_USER_LOCATION, UPDATE_SUBSCRIBED_SPORTS, UPDATE_ATTENDING_GAMES, UPDATE_GAMES_OF_INTEREST } from '../constants';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGames: [],
  attendingGames: [],
  location: null,
  subscribedSports: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case UPDATE_HOSTED_GAMES:
      return { ...state, hostedGames: action.payload };
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
