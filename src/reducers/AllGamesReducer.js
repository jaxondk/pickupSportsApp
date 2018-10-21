import { ADD_GAME } from '../constants';
import { mockSoccerGame1, mockSoccerGame2 } from '../../assets/MockData';

const INITIAL_STATE = [mockSoccerGame1, mockSoccerGame2];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
};
