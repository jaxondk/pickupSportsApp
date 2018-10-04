import { combineReducers } from 'redux';
import mockReducer from './MockReducer'

export default combineReducers({
  mock: mockReducer
});
