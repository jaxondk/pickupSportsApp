import { LOAD_USER_LOCATION_DENIED, LOAD_USER_LOCATION_SUCCESS, LOAD_USER_LOCATION_FAILURE, stateOptions, LOAD_USER_LOCATION } from "../constants";


const INITIAL_STATE = {
  userLocation: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_USER_LOCATION:
      return { ...state, userLocation: stateOptions.LOADING };
    case LOAD_USER_LOCATION_SUCCESS:
      return { ...state, userLocation: stateOptions.SUCCESS };
    case LOAD_USER_LOCATION_DENIED:
      return { ...state, userLocation: stateOptions.DENIED };
    case LOAD_USER_LOCATION_FAILURE:
      return { ...state, userLocation: stateOptions.FAILURE };
    default:
      return state;
  }
};