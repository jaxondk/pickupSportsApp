import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { colors } from '../../constants';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 9
  },
  footerBtn: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    alignItems: 'center', //horizontal align
    justifyContent: 'center', //vertical align
  },
}

class ChooseSportPage extends Component {
  static navigationOptions = {
    title: "Choose a Sport",
  };

  render () {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.content}>
        </View>
        <TouchableOpacity style={styles.footerBtn} onPress={() => this.props.navigation.navigate('ChooseTime')}>
          <Text h3 style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let mapStoreToProps = ({ user }) => ({ user });

export default connect(mapStoreToProps, {})(ChooseSportPage);