import moment from 'moment';

export const colors = {
  PRIMARY: '#2e5ba0',
  // TINT: '',
  // SHADE: '',
  ACCENT: '#f2ad34',
  SILVER: '#e2e2e2',
  SELECTED: '#14772D',
  BBALL_ORANGE: '#f28500',
  TENNIS_GREEN: '#ccff00',
}

export const sports = {
  SOCCER: 'Soccer',
  BASKETBALL: 'Basketball',
  VOLLEYBALL: 'Volleyball', 
  TENNIS: 'Tennis',
}

export const skillLevels = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
}

export const mockGame1 = {
  id: 1,
  name: "Game1",
  hostId: 1,
  sportName: sports.SOCCER,
  moment: moment(new Date()),
  location: { latitude: 21.45, longitude: 90.345 },
  attendeesAllowed: { min: 6, max: 12 },
  attendees: [],
  skillLevel: skillLevels.ADVANCED,
  // attendeeIds: [1],
}

export const mockUser = {
  id: 1,
  firstName: "Jaxon",
  lastName: "Keeler",
  displayName: "El Cucuy",
  hostedGames: [mockGame1],
  attendingGames: [mockGame1],
  location: null,
  subscribedSports: [
    {
      id: 1,
      name: sports.SOCCER,
      distance: 5,
      days: [0, 2, 4, 5], // M, W, F, Sat
      times: [{ start: 17, end: 23 }], //TODO - make TimeRange class
      skillLevels: ['Advanced'],
      gender: ['Men\'s', 'Co-ed'],
    }
  ],
}

export * from './actionTypes';
