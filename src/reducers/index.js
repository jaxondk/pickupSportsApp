import { combineReducers } from 'redux';
import gameReducer from './GameReducer';
import userReducer from './UserReducer'
import hostAGameReducer from './HostAGameReducer';
import appStateReducer from './AppStateReducer';

export default combineReducers({
  allGames: gameReducer,
  user: userReducer,
  hostAGame: hostAGameReducer,
  appState: appStateReducer,
});
