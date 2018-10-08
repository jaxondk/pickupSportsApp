import React, { Component } from 'react';
import moment from 'moment';
import { TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { selectDate, confirmDateChoice } from '../../actions';
import { colors } from '../../constants';

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
  footerBtn: {
    flex: 1,
    alignItems: 'center', //horizontal align
    justifyContent: 'center', //vertical align
  },
}

class ChooseTimePage extends Component {
  static navigationOptions = {
    title: "Choose a Time",
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
    this.props.confirmDateChoice(this.props.hostAGame.selectedDate);
    // this.props.confirmTimeChoice(this.props.hostAGame.selectedTime);
    this.props.navigation.navigate('ChooseLocation');
  }

  render () {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.content}>
          <CalendarPicker
            onDateChange={(date) => this.props.selectDate(date)}
            selectedDayColor={colors.SELECTED}
            minDate={moment().startOf('day')}
          />
        </View>
        {this.renderNextBtn(this.props.hostAGame.selectedDate === null, styles.footerBtn)}
        {/*                                                 ^^^ || this.props.hostAGame.selectedTime === null*/}
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { selectDate, confirmDateChoice })(ChooseTimePage);