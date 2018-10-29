import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { FormInput, FormLabel } from 'react-native-elements';
import { selectSport, updateSportChoice, onNameChange, updateGameName } from '../../actions';
import { sports } from '../../constants';
import { getIconFor } from '../../utilities';
import FooterBlockBtn from '../common/FooterBlockBtn';
import gstyles from '../../styles';
import { isNullOrUndefined } from 'util';

const styles = {
  sportsContainer: {
    marginTop: 20,
    marginBottom: 20,
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  nameContainer: {
    flex: 6,
  },
  sport: {
    width: '33%',
  },
}

class ChooseSportPage extends Component {
  static navigationOptions = {
    title: "Host New Game",
  };

  onPressNextBtn () {
    this.props.updateSportChoice(this.props.hostAGame.selectedSport);
    this.props.updateGameName(this.props.hostAGame.currentGameName.trim())
    this.props.navigation.navigate('ChooseTime');
  }

  render () {
    return (
      <View style={gstyles.pageContainer}>
        <FormLabel labelStyle={gstyles.label}>Choose a Sport</FormLabel>
        <View style={styles.sportsContainer}>
          <View style={styles.sport}>
            {getIconFor(sports.BASKETBALL, 100, this.props.hostAGame.selectedSport, () => this.props.selectSport(sports.BASKETBALL))}
          </View>
          <View style={styles.sport}>
            {getIconFor(sports.TENNIS, 100, this.props.hostAGame.selectedSport, () => this.props.selectSport(sports.TENNIS))}
          </View>
          <View style={styles.sport}>
            {getIconFor(sports.SOCCER, 100, this.props.hostAGame.selectedSport, () => this.props.selectSport(sports.SOCCER))}
          </View>
        </View>
        <View style={styles.nameContainer}>
          <FormLabel labelStyle={gstyles.label}>Name Your Game</FormLabel>
          <FormInput placeholder='Ex: Ball Is Lyfe' onChangeText={this.props.onNameChange} />
        </View>
        <FooterBlockBtn
          onPress={() => this.onPressNextBtn()}
          disabled={this.props.hostAGame.selectedSport === null || isNullOrUndefined(this.props.hostAGame.currentGameName) || this.props.hostAGame.currentGameName.length === 0}
        />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { selectSport, updateSportChoice, onNameChange, updateGameName })(ChooseSportPage);