import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Text, Icon } from 'react-native-elements';
import { selectSport } from '../../actions';
import { colors, sports } from '../../constants';
import { getIconFor } from '../../utilities';

const styles = {
  pageContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    marginTop: 20,
    marginBottom: 20,
    flex: 9,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sport: {
    width: '33%',
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
          <View style={styles.sport}>
            {getIconFor(sports.SOCCER, 100, this.props.hostAGame.selectedSport, () => this.props.selectSport(sports.SOCCER))}
          </View>
          <View style={styles.sport}>
            {getIconFor(sports.BASKETBALL, 100, this.props.hostAGame.selectedSport, () => this.props.selectSport(sports.BASKETBALL))}
          </View>
          <View style={styles.sport}>
            {getIconFor(sports.TENNIS, 100, this.props.hostAGame.selectedSport, () => this.props.selectSport(sports.TENNIS))}
          </View>
        </View>
        <TouchableOpacity style={styles.footerBtn} onPress={() => this.props.navigation.navigate('ChooseTime')}>
          <Text h3 style={{color: 'white'}}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, {selectSport})(ChooseSportPage);