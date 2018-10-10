import { Location, Permissions } from 'expo';
import { UPDATE_HOSTED_GAMES, UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED } from '../constants';

export const removeHostedGame = (hostedGames, gameToRemove) => {
  updated = hostedGames.filter((game) => {
    return (game.id != gameToRemove.id);
  });
  return ({
    type: UPDATE_HOSTED_GAMES,
    payload: updated,
  });
};

export const watchLocation = (dispatch) => {
  console.log('in watchLocation');
  return (dispatch) => {
    Permissions.askAsync(Permissions.LOCATION).then((permission) => {
      console.log('in .then of ask. permission: ', permission);
      if (permission.status !== 'granted') {
        return ({ type: LOAD_USER_LOCATION_DENIED });
      } else {
        Location.watchPositionAsync(null, ({coords}) => {
          console.log('cb of watch position. location: ', location)
          dispatch({
            type: UPDATE_USER_LOCATION,
            payload: { latitude: coords.latitude, longitude: coords.longitude }
          });
        });
      }
    }, (err) => console.log(err));
  }
}