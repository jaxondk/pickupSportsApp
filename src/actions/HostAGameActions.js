import moment from 'moment';
import { SELECT_SPORT, UPDATE_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_TIME, UPDATE_MOMENT } from '../constants';

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

export const confirmDateTimeChoice = (date, time) => {
  var combined = moment(date.format('YYYY-MM-DD' + ' ' + time.format('HH:mm:ss')))
  return ({
    type: UPDATE_MOMENT,
    payload: combined
  });

}

export const selectTime = (time) => {
  console.log('selected time: ', time);
  console.log('time moment: ', moment(time))
  return ({
    type: SELECT_TIME,
    payload: moment(time),
  })
}
