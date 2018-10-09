import { SELECT_SPORT, UPDATE_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_MOMENT, SELECT_LOCATION, UPDATE_LOCATION } from "../constants";


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
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SPORT:
      return { ...state, selectedSport: action.payload };
    case UPDATE_SPORT:
      return { ...state, game: { ...state.game, sport: action.payload } };
    case SELECT_DATE:
      return { ...state, selectedDate: action.payload };
    case SELECT_TIME:
      return { ...state, selectedTime: action.payload };
    case UPDATE_MOMENT:
      return { ...state, game: { ...state.game, moment: action.payload } };
    case SELECT_LOCATION:
      return { ...state, selectedLocation: action.payload };
    case UPDATE_LOCATION:
      return { ...state, game: { ...state.game, location: action.payload } };
    default:
      return state;
  }
};
