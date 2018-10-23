import { Location, Permissions } from 'expo';
import { UPDATE_USER_LOCATION, LOAD_USER_LOCATION_DENIED, UPDATE_SUBSCRIBED_SPORTS, LOAD_USER_LOCATION_SUCCESS, LOAD_USER_LOCATION, UPDATE_ATTENDING_GAMES, UPDATE_GAMES_OF_INTEREST } from '../constants';

export const removeSubscribedSport = (subscribedSports, filterIdToRemove) => {
  updated = subscribedSports.filter((subscribedSport) => {
    return (subscribedSport.id != filterIdToRemove);
  });
  return ({
    type: UPDATE_SUBSCRIBED_SPORTS,
    payload: updated,
  });
}

export const attendGame = (attendingGames, gameToAttend) => {
  attendingGames.push(gameToAttend);
  return ({
    type: UPDATE_ATTENDING_GAMES,
    payload: attendingGames,
  });
}

export const unattendGame = (attendingGames, gameIdToUnattend) => {
  updated = attendingGames.filter((game) => (game.id != gameIdToUnattend));
  return ({
    type: UPDATE_ATTENDING_GAMES,
    payload: updated,
  });
}

export const addGameOfInterest = (subscribedSports, subscribedSportId, gameToAdd) => {
  //Since games of interest are nested in subscribed sports, need to modify subscribed sports
  sport = subscribedSports.find((sport) => (sport.id === subscribedSportId));
  sport.gamesOfInterest.push(gameToAdd);
  return ({
    type: UPDATE_SUBSCRIBED_SPORTS,
    payload: subscribedSports,
  });
}

export const removeGameOfInterest = (subscribedSports, subscribedSportId, gameIdToRemove) => {
  //Since games of interest are nested in subscribed sports, need to modify subscribed sports
  sport = subscribedSports.find((sport) => (sport.id === subscribedSportId));
  sport.gamesOfInterest = sport.gamesOfInterest.filter((game) => (game.id != gameIdToRemove));
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