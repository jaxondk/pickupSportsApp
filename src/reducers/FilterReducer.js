import { mockSoccerGame0, mockSoccerGame1 } from '../../assets/MockData';
import { sports, TOGGLE_BASKETBALL, TOGGLE_TENNIS, TOGGLE_GAMES_OF_INTEREST, TOGGLE_ATTENDING_GAMES, TOGGLE_SOCCER, SAVE_TMP_FILTER, RESTORE_SAVED_FILTER } from '../constants';

const INITIAL_STATE = { 
  gamesForDisplay: { //Maybe I can put these in the allGames reducer, and on SAVE_TMP_FILTER I can pass a payload of the filter and then filter from allgamesreducer
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
    case SAVE_TMP_FILTER:
      return { ...state, savedFilter: state.tmpFilter }
    case RESTORE_SAVED_FILTER:
      console.log('state after restore saved filter', { ...state, tmpFilter: state.savedFilter });
      return { ...state, tmpFilter: state.savedFilter }
    default:
      return state;
  }
};
