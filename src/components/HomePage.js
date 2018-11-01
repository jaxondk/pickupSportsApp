import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { colors, icons } from '../constants';
import { connect } from 'react-redux';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'gainsboro',
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
  tile: {
    borderTopWidth: 5,
    borderColor: 'rgba(0,0,0,.3)',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOffset: { width: 1, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    flex: 1,
    borderRadius: 3,
    padding: 20,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    elevation: 1,
    justifyContent: 'center',
  },
  tileText: {
    marginBottom: 10
  }
}

class HomePage extends Component {
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
  };

  render() {
    return (
      <View style={styles.pageContainer}>
        <TouchableOpacity style={[styles.tile, {borderTopColor: colors.ACCENT}]} onPress={() => this.props.navigation.navigate('GamesMap')}>
          <Icon reverse name={icons.SEARCH.name} color={colors.ACCENT} size={50} />
          <Text h4 style={styles.tileText}>Find New Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tile, { borderTopColor: colors.SELECTED }]} onPress={() => this.props.navigation.navigate('AttendingGames')}>
          <Icon reverse {...icons.CHECKMARK} color={colors.SELECTED} size={50} />
          <Text h4 style={styles.tileText}>View Joined Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.tile, { borderTopColor: colors.PRIMARY }]} onPress={() => this.props.navigation.navigate('HostedGames')}>
          <Icon reverse type={icons.LOCATION.type} name={icons.LOCATION.name} color={colors.PRIMARY} size={50} />
          <Text h4 style={styles.tileText}>Manage Hosted Games</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, {})(HomePage)