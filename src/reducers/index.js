import { combineReducers } from 'redux';
import allGamesReducer from './AllGamesReducer';
import userReducer from './UserReducer'
import hostAGameReducer from './HostAGameReducer';
import appStateReducer from './AppStateReducer';

export default combineReducers({
  allGames: allGamesReducer,
  user: userReducer,
  hostAGame: hostAGameReducer,
  appState: appStateReducer,
});
