import { combineReducers } from 'redux';
import allGamesReducer from './AllGamesReducer';
import userReducer from './UserReducer'
import hostAGameReducer from './HostAGameReducer';
import appStateReducer from './AppStateReducer';
import FilterReducer from './FilterReducer';
import GamesToDisplayReducer from './GamesToDisplayReducer';

export default combineReducers({
  allGames: allGamesReducer,
  gamesToDisplay: GamesToDisplayReducer,
  user: userReducer,
  hostAGame: hostAGameReducer,
  appState: appStateReducer,
  filter: FilterReducer,
});
