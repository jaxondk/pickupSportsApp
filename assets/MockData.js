import moment from 'moment';
import { sports, skillLevels } from "../src/constants";


const locations = {
  KIWANIS: { latitude: 40.247031, longitude: -111.639763 },
  BELMONT: { latitude: 40.240058, longitude: -111.637037 },
  IPF: { latitude: 40.247328, longitude: -111.656783 },
}

const mockSoccerGame1 = {
  id: 0,
  name: "Ronaldo Haters",
  hostId: 99,
  sportName: sports.SOCCER,
  moment: moment(new Date()),
  location: locations.IPF,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

const mockSoccerGame2 = {
  id: 1,
  name: "Visca la Barça!",
  hostId: 99,
  sportName: sports.SOCCER,
  moment: moment('11/4/2018 6:30 pm', 'MM/DD/YYYY h:mm A'),
  location: locations.KIWANIS,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

const mockBballGame1 = {
  id: 2,
  name: "Haters gonna hate",
  hostId: 99,
  sportName: sports.BASKETBALL,
  moment: moment('11/2/2018 8:30 pm', 'MM/DD/YYYY h:mm A'),
  location: locations.BELMONT,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

const mockBballGame2 = {
  id: 3,
  name: "Shooters shoot",
  hostId: 99,
  sportName: sports.BASKETBALL,
  moment: moment('11/3/2018 9:00 pm', 'MM/DD/YYYY h:mm A'),
  location: locations.IPF,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

const mockTennisGame1 = {
  id: 4,
  name: "Fed Express",
  hostId: 99,
  sportName: sports.TENNIS,
  moment: moment('11/1/2018 8:00 am', 'MM/DD/YYYY h:mm A'),
  location: locations.BELMONT,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

const mockTennisGame2 = {
  id: 5,
  name: "Rafa-Nation",
  hostId: 99,
  sportName: sports.TENNIS,
  moment: moment('11/6/2018 9:00 am', 'MM/DD/YYYY h:mm A'),
  location: locations.BELMONT,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

export const mockGames = [mockBballGame1, mockBballGame2, mockSoccerGame1, mockSoccerGame2, mockTennisGame1, mockTennisGame2];

export const mockUser = {
  id: 0,
  firstName: "Jaxon",
  lastName: "Keeler",
  hostedGamesIds: [],
  attendingGamesIds: [],
  location: null,
}