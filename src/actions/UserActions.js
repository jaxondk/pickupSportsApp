import { Location, Permissions } from 'expo';
import { UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED, UPDATE_SUBSCRIBED_SPORTS, LOAD_USER_LOCATION_SUCCESS, LOAD_USER_LOCATION, ATTEND_GAME, LEAVE_GAME, UPDATE_GAMES_OF_INTEREST } from '../constants';

export const removeSubscribedSport = (subscribedSports, filterIdToRemove) => {
  updated = subscribedSports.filter((subscribedSport) => {
    return (subscribedSport.id != filterIdToRemove);
  });
  return ({
    type: UPDATE_SUBSCRIBED_SPORTS,
    payload: updated,
  });
}

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

export const addGameOfInterest = (subscribedSports, subscribedSportId, gameToAdd) => {
  //Since games of interest are nested in subscribed sports, need to modify subscribed sports
  sport = subscribedSports.find((sport) => (sport.id === subscribedSportId));
  sport.gamesOfInterestIds.push(gameToAdd);
  return ({
    type: UPDATE_SUBSCRIBED_SPORTS,
    payload: subscribedSports,
  });
}

export const removeGameOfInterest = (subscribedSports, subscribedSportId, gameIdToRemove) => {
  //Since games of interest are nested in subscribed sports, need to modify subscribed sports
  sport = subscribedSports.find((sport) => (sport.id === subscribedSportId));
  sport.gamesOfInterestIds = sport.gamesOfInterestIds.filter((game) => (game.id != gameIdToRemove));
  return ({
    type: UPDATE_SUBSCRIBED_SPORTS,
    payload: subscribedSports,
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