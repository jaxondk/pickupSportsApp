import moment from 'moment';
import { sports, skillLevels } from "../src/constants";


const locations = {
  KIWANIS: { latitude: 40.247031, longitude: -111.639763 },
  BELMONT: { latitude: 40.240058, longitude: -111.637037 },
  IPF: { latitude: 40.247328, longitude: -111.656783 },
}

const mockSoccerGame1 = {
  id: 1,
  name: "SoccerGame1",
  hostId: 1,
  sportName: sports.SOCCER,
  moment: moment(new Date()),
  location: locations.IPF,
  attendeesAllowed: { min: 6, max: 12 },
  attendees: [],
  skillLevel: skillLevels.ADVANCED,
  // attendeeIds: [1],
}

const mockSoccerGame2 = {
  id: 2,
  name: "SoccerGame2",
  hostId: 99,
  sportName: sports.SOCCER,
  moment: moment('12/25/2018 6:30 pm', 'MM/DD/YYYY h:mm A'),
  location: locations.BELMONT,
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
  hostedGames: [mockSoccerGame1],
  attendingGames: [mockSoccerGame1],
  location: null,
  subscribedSports: [
    {
      id: 1, //Right now, this is just so that when iterating over a user's subscribed sports there's a unique key
      name: sports.SOCCER,
      filter: {
        distance: 5,
        days: [0, 2, 4, 5], // M, W, F, Sat
        times: [{ start: 17, end: 23 }], //TODO - make TimeRange class
        skillLevels: ['Advanced'],
        gender: ['Men\'s', 'Co-ed'],
      },
      gamesOfInterest: [mockSoccerGame2] //TODO - apply filters to find these
    },
  ],
}