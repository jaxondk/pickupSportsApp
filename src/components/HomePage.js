import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { colors, icons } from '../constants';
import { connect } from 'react-redux';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  topCard: {
    flex: 1,
    borderBottomColor: colors.SILVER,
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
  },
  bottomCard: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    // marginTop: 25,
  },
}

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <TouchableOpacity style={styles.topCard} onPress={() => this.props.navigation.navigate('GamesMap')}>
          <Icon reverse name={icons.SEARCH.name} color={colors.ACCENT} size={66} />
          <Text h4>Find New Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topCard} onPress={() => this.props.navigation.navigate('AttendingGames')}>
          <Icon reverse {...icons.CHECKMARK} color={colors.SELECTED} size={66} />
          <Text h4>View Joined Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomCard} onPress={() => this.props.navigation.navigate('HostedGames')}>
          <Icon reverse type={icons.LOCATION.type} name={icons.LOCATION.name} color={colors.PRIMARY} size={66} />
          <Text h4>Manage Hosted Games</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, {})(HomePage)