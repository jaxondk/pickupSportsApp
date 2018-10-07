import { SELECT_SPORT, UPDATE_SPORT } from "../constants";


const INITIAL_STATE = 
{
  game: {
    id: null,
    name: null,
    hostId: null,
    sport: null,
    date: null,
    timeRange: null,
    location: null,
    attendeesAllowed: null, //minmax
    attendees: [],
    skillLevel: null,
  },
  selectedSport: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_SPORT:
      return {...state, selectedSport: action.payload}
    case UPDATE_SPORT:
      return {...state, game: {...state.game, sport: action.payload}};
    default:
      return state;
  }
};
