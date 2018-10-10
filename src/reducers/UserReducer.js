import { USER_LOGGED_IN, UPDATE_HOSTED_GAMES, UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED } from '../constants';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGames: [],
  attendingGames: [],
  location: null,
  // sports: [], //Unnecessary - filters has this info. Might want this just for convenience tho
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case UPDATE_HOSTED_GAMES:
      return { ...state, hostedGames: action.payload };
    case LOAD_USER_LOCATION_DENIED:
      return { ...state, location: 'DENIED' };
    case UPDATE_USER_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
