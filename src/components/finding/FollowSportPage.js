import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { selectSport, followSport, clearHostAGameForm } from '../../actions';
import {  sports } from '../../constants';
import { getIconFor } from '../../utilities';
import FooterBlockBtn from '../common/FooterBlockBtn';

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
}

// THIS IS TEMPORARY. Should re-use ChooseSportPage and make it generic, along with all the other "choose___" pages for editing
class FollowSportPage extends Component {
  static navigationOptions = {
    title: "Follow a Sport",
  };

  onPressSaveBtn () {
    this.props.followSport(this.props.hostAGame.selectedSport);
    this.props.clearHostAGameForm();
    this.props.navigation.goBack();
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
        <FooterBlockBtn
          onPress={() => this.onPressSaveBtn()}
          disabled={this.props.hostAGame.selectedSport === null}
        />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { selectSport, followSport, clearHostAGameForm })(FollowSportPage);