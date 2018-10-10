import { Location, Permissions } from 'expo';
import { UPDATE_HOSTED_GAMES, UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED, UPDATE_SUBSCRIBED_SPORTS } from '../constants';

export const removeHostedGame = (hostedGames, gameToRemove) => {
  updated = hostedGames.filter((game) => {
    return (game.id != gameToRemove.id);
  });
  return ({
    type: UPDATE_HOSTED_GAMES,
    payload: updated,
  });
};

export const addHostedGame = (hostedGames, gameToAdd) => {
  hostedGames.push(gameToAdd);
  return ({
    type: UPDATE_HOSTED_GAMES,
    payload: hostedGames,
  });
}

export const removeSubscribedSport = (subscribedSports, filterIdToRemove) => {
  updated = subscribedSports.filter((subscribedSport) => {
    return (subscribedSport.id != filterIdToRemove);
  });
  return ({
    type: UPDATE_SUBSCRIBED_SPORTS,
    payload: updated,
  });
}

export const watchLocation = (dispatch) => {
  console.log('in watchLocation');
  return (dispatch) => {
    Permissions.askAsync(Permissions.LOCATION).then((permission) => {
      console.log('in .then of ask. permission: ', permission);
      if (permission.status !== 'granted') {
        return ({ type: LOAD_USER_LOCATION_DENIED });
      } else {
        Location.watchPositionAsync(null, ({coords}) => {
          console.log('cb of watch position. coords: ', coords)
          dispatch({
            type: UPDATE_USER_LOCATION,
            payload: { latitude: coords.latitude, longitude: coords.longitude }
          });
        });
      }
    }, (err) => console.log(err));
  }
}