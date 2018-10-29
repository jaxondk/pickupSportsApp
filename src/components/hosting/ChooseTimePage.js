import React, { Component } from 'react';
import { View, DatePickerIOS } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import CalendarPicker from 'react-native-calendar-picker';
import { selectDate, selectTime, updateDateTimeChoice, initRegion } from '../../actions';
import { colors } from '../../constants';
import FooterBlockBtn from '../common/FooterBlockBtn';
import gstyles from '../../styles';

const styles = {
  content: {
    marginTop: 20,
    marginBottom: 20,
    flex: 9,
  },
}

class ChooseTimePage extends Component {
  static navigationOptions = {
    title: "Choose When",
  };

  // This is a workaround for datepickerIOS's broken minuteInterval
  constructor(props) {
    super(props);
    this.state = { minuteInterval: 1 };
  }

  // This is a workaround for datepickerIOS's broken minuteInterval
  componentDidMount() {
    this.setState({ minuteInterval: 5 });
  }

  onPressNextBtn () {
    this.props.updateDateTimeChoice(this.props.hostAGame.selectedDate, this.props.hostAGame.selectedTime);
    this.props.initRegion(this.props.user.location);
    this.props.navigation.navigate('ChooseLocation');
  }

  render () {
    return (
      <View style={gstyles.pageContainer}>
        <View style={styles.content}>
          <View style={{ alignItems: 'center' }}>
            <CalendarPicker
              onDateChange={(date) => this.props.selectDate(date)}
              selectedDayColor={colors.SELECTED}
              minDate={moment().startOf('day')}
              todayBackgroundColor={'white'}
            />
          </View>
          <DatePickerIOS
            mode='time'
            date={(this.props.hostAGame.selectedTime) ? this.props.hostAGame.selectedTime._d : new Date()}
            onDateChange={(date) => this.props.selectTime(date)}
            minuteInterval={this.state.minuteInterval}
          />
        </View>
        <FooterBlockBtn
          onPress={() => this.onPressNextBtn()}
          disabled={this.props.hostAGame.selectedDate === null || this.props.hostAGame.selectedTime === null}
        />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { selectDate, updateDateTimeChoice, selectTime, initRegion })(ChooseTimePage);