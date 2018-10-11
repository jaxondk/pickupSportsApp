import moment from 'moment';
import { SELECT_SPORT, UPDATE_GAME_SPORT, SELECT_DATE, SELECT_TIME, UPDATE_MOMENT, UPDATE_GAME_LOCATION, SELECT_REGION, INIT_REGION, CLEAR_HOST_A_GAME_FORM } from '../constants';

export const selectSport = (sportName) => {
  return ({
    type: SELECT_SPORT,
    payload: sportName,
  });
};

export const updateSportChoice = (sportName) => {
  return ({
    type: UPDATE_GAME_SPORT,
    payload: sportName,
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

export const initRegion = (userLocation) => {
  return ({
    type: INIT_REGION,
    payload: { ...userLocation, latitudeDelta: 0.025, longitudeDelta: 0.025}
  });
}

export const selectRegion = (region) => {
  return ({
    type: SELECT_REGION,
    payload: region
  });
}

export const updateLocation = ({longitude, latitude}) => {
  return ({
    type: UPDATE_GAME_LOCATION,
    payload: {longitude, latitude}
  });
}

export const clearHostAGameForm = () => {
  return ({
    type: CLEAR_HOST_A_GAME_FORM,
  });
}
