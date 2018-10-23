import moment from 'moment';
export * from './actionTypes';

export const colors = {
  PRIMARY: '#2e5ba0',
  // TINT: '',
  // SHADE: '',
  ACCENT: '#f2ad34',
  SILVER: '#e2e2e2',
  PURPLE: '#83389B',
  SELECTED: '#14772D',
  CANCEL: '#c20000', //TODO - find better red
  BBALL_ORANGE: '#f28500',
  TENNIS_GREEN: '#ccff00',
};

export const sports = {
  SOCCER: 'Soccer',
  BASKETBALL: 'Basketball',
  VOLLEYBALL: 'Volleyball', 
  TENNIS: 'Tennis',
};

export const icons = {
  CLOCK: {type: 'font-awesome', name: 'clock-o'},
  CAL: { type: 'font-awesome', name: 'calendar' },
  PENCIL: { type: 'material-community', name: 'pencil' },
  SEARCH: { name: 'search' },
  LOCATION: { type: 'entypo', name: 'location-pin' },
};

export const skillLevels = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
};

export const defaultFilter = {
  distance: 5,
  days: [0, 2, 4, 5], // M, W, F, Sat
  times: [{ start: 17, end: 23 }], //TODO - make TimeRange class
  skillLevels: ['Advanced'],
  gender: ['Men\'s', 'Co-ed'],
};

export const stateOptions = {
  // UNINITIALIZED: 'unitialized_state',
  LOADING: 'loading_state',
  SUCCESS: 'success_state',
  DENIED: 'denied_state',
  FAILURE: 'failure_state',
};
