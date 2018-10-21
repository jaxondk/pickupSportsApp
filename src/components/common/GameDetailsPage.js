import React, { Component } from 'react';
import { View, Text } from 'react-native';
import gstyles from '../../styles';

export default class GameDetailsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('game').name,
    }
  };

  render() {
    const game = this.props.navigation.getParam('game');
    return (
      <View style={gstyles.pageContainer}>
        <Text>{game.name}</Text>
      </View>
    )
  }

}