import { SELECT_SPORT, UPDATE_SPORT, SELECT_DATE, SELECT_TIME } from "../constants";


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
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SPORT:
      return {...state, selectedSport: action.payload}
    case UPDATE_SPORT:
      return {...state, game: {...state.game, sport: action.payload}};
    case SELECT_DATE:
      return { ...state, selectedDate: action.payload }
    case SELECT_TIME:
      return { ...state, selectedTime: action.payload }
    default:
      return state;
  }
};
