import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import HomePage from './components/HomePage';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router >
        <Scene key='root'>
          <Scene key='main'>
            <Scene key='homePage' component={HomePage} title='Home' initial />
          </Scene>
        </Scene>
      </Router>
    )
  }
}
