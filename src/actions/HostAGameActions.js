import { SELECT_SPORT, UPDATE_SPORT, SELECT_DATE } from '../constants';

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

export const selectDate = (date) => {
  console.log('selected date: ', date);
  return ({
    type: SELECT_DATE,
    payload: date,
  })
}

export const confirmDateChoice = (date) => {
  return ({
    type: UPDATE_DATE,
    payload: date,
  });
};
