import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { CheckBox, FormLabel } from 'react-native-elements';
import { HeaderBackButton } from 'react-navigation';
import { connect } from 'react-redux';
import gstyles from '../../styles';
import { colors, sports, TOGGLE_SOCCER, TOGGLE_BASKETBALL, TOGGLE_TENNIS, TOGGLE_ATTENDING_GAMES, TOGGLE_GAMES_OF_INTEREST, TOGGLE_HOSTED_GAMES } from '../../constants';
import { getPinColor } from '../../utilities';
import FooterBlockBtn from '../common/FooterBlockBtn';
import { toggle, restoreSavedFilter, saveTmpFilter } from '../../actions';

const styles = {
  multiBtnFooter: {
    flex: 1,
    flexDirection: 'row',
  }
}

class FilterPage extends Component {
  static navigationOptions = {
    title: "Filter",
    headerLeft: null,
    gesturesEnabled: false,
  };

  onPressCancelBtn() {
    if (JSON.stringify(this.props.tmpFilter) === JSON.stringify(this.props.savedFilter)) {
      this.props.navigation.goBack()
    }
    else {
      Alert.alert(
        'Discard Changes?',
        'Are you sure you want to go back without saving? This will discard the changes you\'ve made',
        [
          { text: "Yes, Discard Changes", onPress: () => { this.props.restoreSavedFilter(); this.props.navigation.goBack(); } },
          { text: "No, Stay Here" }
        ]
      );
    }
  }

  onPressSaveBtn() {
    this.props.saveTmpFilter();
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={gstyles.pageContainer}>
        <View style={gstyles.content}>
          <FormLabel labelStyle={gstyles.label}>Filter By Sport</FormLabel>
          <CheckBox 
            title='Basketball Games' checkedColor={getPinColor(sports.BASKETBALL)} 
            checked={this.props.tmpFilter[sports.BASKETBALL]} onPress={() => this.props.toggle(TOGGLE_BASKETBALL)}/>
          <CheckBox 
            title='Soccer Games' checkedColor={getPinColor(sports.SOCCER)} 
            checked={this.props.tmpFilter[sports.SOCCER]} onPress={() => this.props.toggle(TOGGLE_SOCCER)} />
          <CheckBox 
            title='Tennis Games' checkedColor={getPinColor(sports.TENNIS)}
            checked={this.props.tmpFilter[sports.TENNIS]} onPress={() => this.props.toggle(TOGGLE_TENNIS)} />
          <FormLabel labelStyle={gstyles.label}>Filter By Attendance</FormLabel>
          <CheckBox 
            title="Games you're attending" checkedColor={colors.SELECTED} 
            checked={this.props.tmpFilter.attendingGames} onPress={() => this.props.toggle(TOGGLE_ATTENDING_GAMES)} />
          <CheckBox 
            title="Games you may be interested in" checkedColor={colors.SELECTED} 
            checked={this.props.tmpFilter.gamesOfInterest} onPress={() => this.props.toggle(TOGGLE_GAMES_OF_INTEREST)} />
          <CheckBox
            title="Games you're hosting" checkedColor={colors.SELECTED}
            checked={this.props.tmpFilter.hostedGames} onPress={() => this.props.toggle(TOGGLE_HOSTED_GAMES)} />
        </View>
        <View style={styles.multiBtnFooter}>
          <FooterBlockBtn
            onPress={() => this.onPressSaveBtn()}
            text='Save'
            disabled={JSON.stringify(this.props.tmpFilter) === JSON.stringify(this.props.savedFilter)}
            bgColor={colors.SELECTED}
          />
          <FooterBlockBtn
            onPress={() => this.onPressCancelBtn()}
            text='Cancel'
            disabled={false}
            bgColor={colors.CANCEL}
          />
        </View>
      </View>
    )
  }
};

let mapStoreToProps = ({ filter }) => {
  return {
    tmpFilter: filter.tmpFilter,
    savedFilter: filter.savedFilter,
  }
};

export default connect(mapStoreToProps, {toggle, restoreSavedFilter, saveTmpFilter})(FilterPage);