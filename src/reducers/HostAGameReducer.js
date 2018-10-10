import { SELECT_SPORT, UPDATE_GAME_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_MOMENT, SELECT_LOCATION, UPDATE_GAME_LOCATION, INIT_REGION, SELECT_REGION, UPDATE_HOSTED_GAMES, ADD, CLEAR_HOST_A_GAME_FORM } from "../constants";


const INITIAL_STATE =
{
  game: {
    id: null,
    name: null,
    hostId: null,
    sport: null,
    moment: null,
    // date: null,
    // timeRange: null,
    location: null,
    attendeesAllowed: null, //minmax
    attendees: [],
    skillLevel: null,
  },
  selectedSport: null,
  selectedDate: null,
  selectedTime: null,
  selectedLocation: null,
  region: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SPORT:
      return { ...state, selectedSport: action.payload };
    case UPDATE_GAME_SPORT:
      return { ...state, game: { ...state.game, sport: action.payload } };
    case SELECT_DATE:
      return { ...state, selectedDate: action.payload };
    case SELECT_TIME:
      return { ...state, selectedTime: action.payload };
    case UPDATE_MOMENT:
      return { ...state, game: { ...state.game, moment: action.payload } };
    case INIT_REGION:
      console.log('init region payload', action.payload)
      return { ...state, region: action.payload };
    case SELECT_REGION:
      console.log('select region payload', action.payload)
      return { ...state, region: action.payload };
    case UPDATE_GAME_LOCATION:
      return { ...state, game: { ...state.game, location: action.payload } };
    case CLEAR_HOST_A_GAME_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
