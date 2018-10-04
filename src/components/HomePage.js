import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { colors } from '../constants';
import { Actions } from 'react-native-router-flux';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  hostingCard: {
    flex: 1,
    borderBottomColor: colors.SILVER,
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  findingCard: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
}

export default class HomePage extends Component {
  render() {
    return (
      <ScrollView style={styles.pageContainer}>
        <TouchableOpacity style={styles.hostingCard} onPress={() => Actions.hostingFlow()}>
          <Icon reverse type='entypo' name='location-pin' color={colors.PRIMARY} size={100} />
          <Text h1>Find Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findingCard} onPress={() => Actions.findingFlow()}>
          <Icon reverse name='search' color={colors.ACCENT} size={100} />
          <Text h2>Host Games</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}