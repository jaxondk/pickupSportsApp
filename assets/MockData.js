import moment from 'moment';
import { sports } from "../src/constants";

const locations = {
  KIWANIS: { latitude: 40.247031, longitude: -111.639763 },
  BELMONT: { latitude: 40.240058, longitude: -111.637037 },
  IPF: { latitude: 40.247328, longitude: -111.656783 },
};

const randomDate = () => {
  const min = new Date();
  const max = moment('11/15/2018 10:00 pm', 'MM/DD/YYYY h:mm A')._d;
  return moment(new Date(min.getTime() + Math.random(0) * (max.getTime() - max.getTime())));
};

const randomNearbyLocation = (nearbyLoc) => {
  //jitter between -.009 and .009
  const min = -.01;
  const max = .01
  const jitterLat = parseFloat((Math.random(0) * (max - min) + min).toFixed(8));
  const jitterLng = parseFloat((Math.random(0) * (max - min) + min).toFixed(8));
  const randomLoc = {latitude: nearbyLoc.latitude + jitterLat, longitude: nearbyLoc.longitude + jitterLng};
  console.log('Random loc:', randomLoc);
  return randomLoc;
};

const generateMockGame = (name, sport, prevId) => {
  return {
    id: prevId+1,
    name: name,
    hostId: 99,
    sportName: sport,
    moment: randomDate(),
    location: randomNearbyLocation(locations.IPF),
  }
}

const mockGameNames = [
  'Soccer kings', "O'Doyle Rules", "Ronaldo Haters", "Shooters shoot", "Rafa-Nation", "Daaaa Bulls", "Helados Fritos", 
  "Wimbledon", "Hoodrats", "El Cucuy", "30+ Ballers",
];

const mockGameSports = [
  sports.SOCCER, sports.TENNIS, sports.SOCCER, sports.BASKETBALL, sports.TENNIS, sports.BASKETBALL, sports.SOCCER,
  sports.TENNIS, sports.BASKETBALL, sports.SOCCER, sports.BASKETBALL,
];

const generateMockGames = (names, sports) => {
  const games = [mockBballGame1, mockSoccerGame1, mockTennisGame1];
  for (let i = 0; i < names.length; i++) {
    games.push(generateMockGame(names[i], sports[i], games[i+2].id))
  }
  return games;
}

const mockSoccerGame1 = {
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

const mockTennisGame1 = {
  id: 4,
  name: "Fed Express",
  hostId: 99,
  sportName: sports.TENNIS,
  moment: moment('11/1/2018 8:00 am', 'MM/DD/YYYY h:mm A'),
  location: locations.IPF,
  // attendeesAllowed: { min: 6, max: 12 },
  // attendees: [],
  // skillLevel: skillLevels.ADVANCED,
}

export const mockGames = generateMockGames(mockGameNames, mockGameSports);

export const mockUser = {
  id: 0,
  firstName: "Jaxon",
  lastName: "Keeler",
  hostedGamesIds: [],
  attendingGamesIds: [],
  location: null,
}