import { SELECT_SPORT, UPDATE_GAME_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_MOMENT, UPDATE_GAME_LOCATION, INIT_REGION, SELECT_REGION, CLEAR_HOST_A_GAME_FORM, skillLevels, HOST_A_GAME_NAME_CHANGED, UPDATE_GAME_NAME } from "../constants";


const INITIAL_STATE =
{
  game: {
    id: null,
    name: null,
    hostId: null,
    sportName: null,
    moment: null,
    location: null,
    // attendeesAllowed: {min: 6, max: 12}, //minmax TODO
    attendees: [],
    // skillLevel: skillLevels.INTERMEDIATE, //TODO
  },
  selectedSport: null,
  currentGameName: null,
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
      return { ...state, game: { ...state.game, sportName: action.payload } };
    case HOST_A_GAME_NAME_CHANGED:
      return { ...state, currentGameName: action.payload };
    case UPDATE_GAME_NAME:
      return { ...state, game: { ...state.game, name: action.payload } };
    case SELECT_DATE:
      return { ...state, selectedDate: action.payload };
    case SELECT_TIME:
      return { ...state, selectedTime: action.payload };
    case UPDATE_MOMENT:
      return { ...state, game: { ...state.game, moment: action.payload } };
    case INIT_REGION:
      return { ...state, region: action.payload };
    case SELECT_REGION:
      return { ...state, region: action.payload };
    case UPDATE_GAME_LOCATION:
      return { ...state, game: { ...state.game, location: action.payload } };
    case CLEAR_HOST_A_GAME_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
