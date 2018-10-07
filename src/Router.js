import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import HostedGamesPage from './components/hosting/HostedGamesPage';
import SubscribedSportsPage from './components/finding/SubscribedSportsPage';
import { colors } from './constants';

export default RootStack = createStackNavigator(
  {
    Home: HomePage,
    HostedGames: HostedGamesPage,
    SubscribedSports: SubscribedSportsPage,
  },
  {
    initialRouteName: 'Home',
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
