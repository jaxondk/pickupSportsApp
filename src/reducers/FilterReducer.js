import { sports, TOGGLE_BASKETBALL, TOGGLE_TENNIS, TOGGLE_GAMES_OF_INTEREST, TOGGLE_ATTENDING_GAMES, TOGGLE_SOCCER, SAVE_TMP_FILTER, RESTORE_SAVED_FILTER, TOGGLE_HOSTED_GAMES } from '../constants';

const INITIAL_STATE = { 
  // savedFilter and tmpFilter must have their attributes in same order. 
  // Otherwise comparing them with JSON.stringify will always eval to unequal
  savedFilter: {
    [sports.SOCCER]: true,
    [sports.BASKETBALL]: true,
    [sports.TENNIS]: true,
    gamesOfInterest: true,
    attendingGames: true,
    hostedGames: false,
  },
  tmpFilter: {
    [sports.SOCCER]: true,
    [sports.BASKETBALL]: true,
    [sports.TENNIS]: true,
    gamesOfInterest: true,
    attendingGames: true,
    hostedGames: false,
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
    case TOGGLE_HOSTED_GAMES:
      return { ...state, tmpFilter: { ...state.tmpFilter, hostedGames: !state.tmpFilter.hostedGames } };
    case SAVE_TMP_FILTER:
      return { ...state, savedFilter: state.tmpFilter }
    case RESTORE_SAVED_FILTER:
      return { ...state, tmpFilter: state.savedFilter }
    default:
      return state;
  }
};
