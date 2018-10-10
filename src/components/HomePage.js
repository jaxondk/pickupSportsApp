import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { colors } from '../constants';
import { connect } from 'react-redux';

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
    alignItems: 'center',
  },
  findingCard: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },
}

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <TouchableOpacity style={styles.hostingCard} onPress={() => this.props.navigation.navigate('HostedGames')}>
          <Icon reverse type='entypo' name='location-pin' color={colors.ACCENT} size={100} />
          <Text h2>Host Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findingCard} onPress={() => this.props.navigation.navigate('SubscribedSports')}>
          <Icon reverse name='search' color={colors.PRIMARY} size={100} />
          <Text h2>Find Games</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, {})(HomePage)