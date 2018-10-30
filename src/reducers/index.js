import { combineReducers } from 'redux';
import allGamesReducer from './AllGamesReducer';
import userReducer from './UserReducer'
import hostAGameReducer from './HostAGameReducer';
import appStateReducer from './AppStateReducer';
import FilterReducer from './FilterReducer';

export default combineReducers({
  allGames: allGamesReducer,
  user: userReducer,
  hostAGame: hostAGameReducer,
  appState: appStateReducer,
  filter: FilterReducer,
});
