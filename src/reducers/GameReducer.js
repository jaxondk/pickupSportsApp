import { CREATE_GAME, REMOVE_GAME } from '../constants';
import { mockSoccerGame0, mockSoccerGame1 } from '../../assets/MockData';

// The state object represents a dictionary w/ key-value pairs of gameId: game object. 
// The game object redundantly has this same id as an attribute. This is for ease of refactoring but should probably be removed later
const INITIAL_STATE = { [mockSoccerGame0.id]: mockSoccerGame0, [mockSoccerGame1.id]: mockSoccerGame1 };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_GAME:
      return {...state, [action.payload.id]: action.payload};
    case REMOVE_GAME:
      delete state[action.payload.id];
      return {...state};
    default:
      return state;
  }
};
