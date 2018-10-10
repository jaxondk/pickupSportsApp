import { combineReducers } from 'redux';
import userReducer from './UserReducer'
import hostAGameReducer from './HostAGameReducer';
import appStateReducer from './AppStateReducer';

export default combineReducers({
  user: userReducer,
  hostAGame: hostAGameReducer,
  appState: appStateReducer,
});
