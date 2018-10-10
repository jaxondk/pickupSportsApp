import { USER_LOGGED_IN, UPDATE_HOSTED_GAMES, UPDATE_USER_LOCATION, UPDATE_SUBSCRIBED_SPORTS, UPDATE_ATTENDING_GAMES } from '../constants';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGames: [],
  attendingGames: [],
  location: null,
  // sports: [], //Unnecessary - subscribedSports has this info. Might want this just for convenience tho
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
    default:
      return state;
  }
};
