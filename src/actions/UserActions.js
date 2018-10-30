import { Location, Permissions } from 'expo';
import { UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED, LOAD_USER_LOCATION_SUCCESS, LOAD_USER_LOCATION, ATTEND_GAME, LEAVE_GAME, } from '../constants';

export const attendGame = (game) => {
  return ({
    type: ATTEND_GAME,
    payload: game,
  });
}

export const leaveGame = (game) => {
  return ({
    type: LEAVE_GAME,
    payload: game,
  });
}

export const watchLocation = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_USER_LOCATION });
    Permissions.askAsync(Permissions.LOCATION).then((permission) => {
      if (permission.status !== 'granted') {
        dispatch({ type: LOAD_USER_LOCATION_DENIED });
      } else {
        const options = null;
        Location.watchPositionAsync(options, ({ coords }) => {
          dispatch({
            type: UPDATE_USER_LOCATION,
            payload: { latitude: coords.latitude, longitude: coords.longitude }
          });
          dispatch({ type: LOAD_USER_LOCATION_SUCCESS });
        });
      }
    }, (err) => {
      console.log(err);
      dispatch({ type: LOAD_USER_LOCATION_FAILURE });
    });
  }
}