import { Location, Permissions } from 'expo';
import { UPDATE_HOSTED_GAMES, UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED, UPDATE_SUBSCRIBED_SPORTS, LOAD_USER_LOCATION_SUCCESS, LOAD_USER_LOCATION, UPDATE_ATTENDING_GAMES } from '../constants';

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

export const unattendGame = (attendingGames, gameIdToUnattend) => {
  updated = attendingGames.filter((game) => {
    return (game.id != gameIdToUnattend);
  });
  return ({
    type: UPDATE_ATTENDING_GAMES,
    payload: updated,
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
        Location.watchPositionAsync(options, ({coords}) => {
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