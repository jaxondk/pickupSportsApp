import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import { selectSport, confirmSportChoice } from '../../actions';
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
    alignItems: 'center', //horizontal align
    justifyContent: 'center', //vertical align
  },
}

class ChooseLocationPage extends Component {
  static navigationOptions = {
    title: "Choose a Location",
  };

  renderNextBtn (disabled, style) {
    var bgColorStyle = disabled ? { backgroundColor: colors.SILVER } : { backgroundColor: colors.PRIMARY };
    return (
      <TouchableOpacity style={[style, bgColorStyle]} onPress={() => disabled ? null : this.onPressNextBtn()} disabled={disabled}>
        <Text h3 style={{ color: 'white' }}>Next</Text>
      </TouchableOpacity>
    );
  }

  onPressNextBtn () {
    this.props.confirmSportChoice(this.props.hostAGame.selectedSport);
    this.props.navigation.navigate('ChooseTime');
  }

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
        {this.renderNextBtn(this.props.hostAGame.selectedSport === null, styles.footerBtn)}
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { selectSport, confirmSportChoice })(ChooseLocationPage);