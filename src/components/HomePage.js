import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { colors, mockUser } from '../constants';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { mockLogUserIn } from '../actions';

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

class HomePage extends Component {
  componentWillMount() {
    //TODO - connect to db, load model objects. This should actually be done after auth
    this.props.mockLogUserIn(mockUser);
  }

  render() {
    return (
      <ScrollView style={styles.pageContainer}>
        <TouchableOpacity style={styles.hostingCard} onPress={() => Actions.hostingFlow()}>
          <Icon reverse type='entypo' name='location-pin' color={colors.PRIMARY} size={100} />
          <Text h2>Host Games</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.findingCard} onPress={() => Actions.findingFlow()}>
          <Icon reverse name='search' color={colors.ACCENT} size={100} />
          <Text h1>Find Games</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default connect(null, { mockLogUserIn })(HomePage)