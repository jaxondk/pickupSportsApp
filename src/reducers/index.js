import { combineReducers } from 'redux';
import userReducer from './UserReducer'
import hostAGameReducer from './HostAGameReducer';

export default combineReducers({
  user: userReducer,
  hostAGame: hostAGameReducer,
});
