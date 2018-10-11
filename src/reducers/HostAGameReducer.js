import { SELECT_SPORT, UPDATE_GAME_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_MOMENT, UPDATE_GAME_LOCATION, INIT_REGION, SELECT_REGION, CLEAR_HOST_A_GAME_FORM, skillLevels } from "../constants";


const INITIAL_STATE =
{
  game: {
    id: null,
    name: 'Name', //TODO
    hostId: null,
    sportName: null,
    moment: null,
    location: null,
    attendeesAllowed: {min: 6, max: 12}, //minmax TODO
    attendees: [],
    skillLevel: skillLevels.INTERMEDIATE, //TODO
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
      return { ...state, game: { ...state.game, sportName: action.payload } };
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
