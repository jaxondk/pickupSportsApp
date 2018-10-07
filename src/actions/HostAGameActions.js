import { SELECT_SPORT, UPDATE_SPORT } from '../constants';

export const selectSport = (sport) => {
  return ({
    type: SELECT_SPORT,
    payload: sport,
  });
};

export const confirmSportChoice = (sport) => {
  return ({
    type: UPDATE_SPORT,
    payload: sport,
  });
};
