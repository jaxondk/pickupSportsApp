import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { colors } from '../../constants';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
}

export default class UsersSportsPage extends Component {
  render () {
    return (
      <ScrollView style={styles.pageContainer}>
        <Text>My Sports</Text>
      </ScrollView>
    );
  }
}