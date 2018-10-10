import moment from 'moment';
import { SELECT_SPORT, UPDATE_GAME_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_TIME, UPDATE_MOMENT, SELECT_LOCATION, UPDATE_GAME_LOCATION } from '../constants';

export const selectSport = (sport) => {
  return ({
    type: SELECT_SPORT,
    payload: sport,
  });
};

export const updateSportChoice = (sport) => {
  return ({
    type: UPDATE_GAME_SPORT,
    payload: sport,
  });
};

export const selectDate = (date) => {
  return ({
    type: SELECT_DATE,
    payload: date,
  })
}

export const selectTime = (time) => {
  return ({
    type: SELECT_TIME,
    payload: moment(time),
  })
}

export const updateDateTimeChoice = (date, time) => {
  var combined = moment(date.format('YYYY-MM-DD' + ' ' + time.format('HH:mm:ss')))
  return ({
    type: UPDATE_MOMENT,
    payload: combined
  });

}

export const selectLocation = (location) => {
  return ({
    type: SELECT_LOCATION,
    payload: location
  });
}

export const updateLocation = (location) => {
  return ({
    type: UPDATE_GAME_LOCATION,
    payload: location
  });
}
