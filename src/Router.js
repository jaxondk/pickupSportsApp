import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './components/HomePage';
import HostedGamesPage from './components/hosting/HostedGamesPage';
import UsersSportsPage from './components/finding/UsersSportsPage';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router >
        <Scene key='root'>
          <Scene key='main'>
            <Scene key='homePage' component={HomePage} title='Home' initial />
            <Scene key='hostingFlow'>
              <Scene key='hostedGamesPage' component={HostedGamesPage} title='My Hosted Games' initial />
            </Scene>
            <Scene key='findingFlow'>
              <Scene key='usersSportsPage' component={UsersSportsPage} title='My Sports' initial />
            </Scene>            
          </Scene>
        </Scene>
      </Router>
    )
  }
}
