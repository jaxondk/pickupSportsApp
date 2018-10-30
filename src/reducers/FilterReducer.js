import { mockSoccerGame0, mockSoccerGame1 } from '../../assets/MockData';
import { sports, TOGGLE_BASKETBALL, TOGGLE_TENNIS, TOGGLE_GAMES_OF_INTEREST, TOGGLE_ATTENDING_GAMES, TOGGLE_SOCCER } from '../constants';

// The state object represents a dictionary w/ key-value pairs of gameId: game object. 
// The game object redundantly has this same id as an attribute. This is for ease of refactoring but should probably be removed later
const INITIAL_STATE = { 
  gamesForDisplay: {
    [mockSoccerGame0.id]: mockSoccerGame0, [mockSoccerGame1.id]: mockSoccerGame1 
  },
  // savedFilter and tmpFilter must have their attributes in same order. 
  // Otherwise comparing them with JSON.stringify will always eval to unequal
  savedFilter: {
    [sports.SOCCER]: true,
    [sports.BASKETBALL]: true,
    [sports.TENNIS]: true,
    gamesOfInterest: true,
    attendingGames: true,
  },
  tmpFilter: {
    [sports.SOCCER]: true,
    [sports.BASKETBALL]: true,
    [sports.TENNIS]: true,
    gamesOfInterest: true,
    attendingGames: true,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_BASKETBALL:
      return { ...state, tmpFilter: { ...state.tmpFilter, [sports.BASKETBALL]: !state.tmpFilter[sports.BASKETBALL] } };
    case TOGGLE_SOCCER:
      return { ...state, tmpFilter: { ...state.tmpFilter, [sports.SOCCER]: !state.tmpFilter[sports.SOCCER] } };
    case TOGGLE_TENNIS:
      return { ...state, tmpFilter: { ...state.tmpFilter, [sports.TENNIS]: !state.tmpFilter[sports.TENNIS] } };
    case TOGGLE_GAMES_OF_INTEREST:
      return { ...state, tmpFilter: { ...state.tmpFilter, gamesOfInterest: !state.tmpFilter.gamesOfInterest } };
    case TOGGLE_ATTENDING_GAMES:
      return { ...state, tmpFilter: { ...state.tmpFilter, attendingGames: !state.tmpFilter.attendingGames } };
    default:
      return state;
  }
};
