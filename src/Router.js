import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import HostedGamesPage from './components/hosting/HostedGamesPage';
import ChooseSportPage from './components/hosting/ChooseSportPage';
import ChooseTimePage from './components/hosting/ChooseTimePage';
// import ChooseLocationPage from './components/hosting/ChooseLocationPage';
// import ChooseSizePage from './components/hosting/ChooseSizePage';
// import ChooseSkillLevelPage from './components/hosting/ChooseSkillLevelPage';
import SubscribedSportsPage from './components/finding/SubscribedSportsPage';
import { colors } from './constants';

export default RootStack = createStackNavigator(
  {
    Home: HomePage,
    HostedGames: HostedGamesPage,
    ChooseSport: ChooseSportPage,
    ChooseTime: ChooseTimePage,
    // ChooseLocation, ChooseLocationPage,
    // ChooseSize: ChooseSizePage,
    // ChooseSkillLevel: ChooseSkillLevelPage,
    SubscribedSports: SubscribedSportsPage,
  },
  {
    initialRouteName: 'ChooseSport',
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
