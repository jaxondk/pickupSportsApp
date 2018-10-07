import { SELECT_SPORT } from '../constants';

export const selectSport = (sport) => {
  return ({
    type: SELECT_SPORT,
    payload: sport,
  });
};