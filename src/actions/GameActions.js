import { REMOVE_GAME, CREATE_GAME } from '../constants/actionTypes';

export const removeGame = (game) => {
  return ({
    type: REMOVE_GAME,
    payload: game,
  });
};

export const createGame = (game) => {
  return ({
    type: CREATE_GAME,
    payload: game,
  });
}