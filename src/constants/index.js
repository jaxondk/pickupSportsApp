export const colors = {
  PRIMARY: '#2e5ba0',
  // TINT: '',
  // SHADE: '',
  ACCENT: '#f2ad34',
  SILVER: '#e2e2e2',
  BBALL_ORANGE: '#f28500',
}

export const sports = {
  SOCCER: 'Soccer',
  BASKETBALL: 'Basketball',
  VOLLEYBALL: 'Volleyball', 
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
  sport: sports.SOCCER,
  skillLevel: skillLevels.ADVANCED,
  date: 'Today', // TODO - no internet now to look up JS date
  startTime: { hr: 18, min: 0},
  endTime: { hr: 20, min: 30 },
  loc: { lat: 21.45, lng: 90.345 },
  attendeesAllowed: { min: 6, max: 12 },
  attendeeIds: [1],
}

export const mockUser = {
  id: 1,
  firstName: "Jaxon",
  lastName: "Keeler",
  displayName: "El Cucuy",
  hostedGames: [mockGame1],
  attendingGames: [mockGame1],
  // sports: [], //Unnecessary - filters has this info. Might want this just for convenience tho
  filters: [
    {
      sport: sports.SOCCER, //TODO - make sport class
      distance: 5,
      days: [0, 2, 4, 5], // M, W, F, Sat
      times: [{ start: 17, end: 23 }], //TODO - make TimeRange class
      skillLevels: ['Advanced'],
      gender: ['Men\'s', 'Co-ed'],
    }
  ],
}

export * from './actionTypes';
