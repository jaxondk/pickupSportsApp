import { USER_LOGGED_IN, UPDATE_HOSTED_GAMES } from '../constants';

const INITIAL_STATE =
{
  id: null,
  firstName: "",
  lastName: "",
  displayName: "",
  hostedGames: [],
  attendingGames: [],
  // sports: [], //Unnecessary - filters has this info. Might want this just for convenience tho
  filters: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case UPDATE_HOSTED_GAMES:
      return {...state, hostedGames: action.payload};
    default:
      return state;
  }
};
