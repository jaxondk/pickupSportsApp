import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import HostedGamesPage from './components/hosting/HostedGamesPage';
import ChooseSportPage from './components/hosting/ChooseSportPage';
import FollowSportPage from './components/finding/FollowSportPage';
import ChooseTimePage from './components/hosting/ChooseTimePage';
import ChooseLocationPage from './components/hosting/ChooseLocationPage';
// import ChooseSizePage from './components/hosting/ChooseSizePage';
// import ChooseSkillLevelPage from './components/hosting/ChooseSkillLevelPage';
import SubscribedSportsPage from './components/finding/SubscribedSportsPage';
import GamesForSportPage from './components/finding/GamesForSportPage';
import GameDetailsPage from './components/common/GameDetailsPage';
import { colors } from './constants';
import LoadingPassthrough from './components/LoadingPassthrough';

export default RootStack = createStackNavigator(
  {
    Loader: LoadingPassthrough,
    Home: HomePage,
    HostedGames: HostedGamesPage,
    ChooseSport: ChooseSportPage,
    FollowSport: FollowSportPage,
    ChooseTime: ChooseTimePage,
    ChooseLocation: ChooseLocationPage,
    // ChooseSize: ChooseSizePage,
    // ChooseSkillLevel: ChooseSkillLevelPage,
    SubscribedSports: SubscribedSportsPage,
    GamesForSport: GamesForSportPage,
    GameDetails: GameDetailsPage,
  },
  {
    initialRouteName: 'Loader',
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.PRIMARY,
      },
      headerTintColor: colors.SILVER,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
