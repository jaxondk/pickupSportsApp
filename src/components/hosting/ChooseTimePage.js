import React, { Component } from 'react';
import { TouchableOpacity, View, DatePickerIOS } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';
import CalendarPicker from 'react-native-calendar-picker';
import { selectDate, selectTime, updateDateTimeChoice, initRegion } from '../../actions';
import { colors } from '../../constants';
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
  },
}

class ChooseTimePage extends Component {
  static navigationOptions = {
    title: "Choose a Time",
  };

  renderNextBtn (disabled, style) {
    var bgColorStyle = disabled ? { backgroundColor: colors.SILVER } : { backgroundColor: colors.PRIMARY };
    return (
      <TouchableOpacity style={[style, bgColorStyle]} onPress={() => disabled ? null : this.onPressSaveBtn()} disabled={disabled}>
        <Text h3 style={{ color: 'white' }}>Next</Text>
      </TouchableOpacity>
    );
  }

  onPressSaveBtn () {
    this.props.updateDateTimeChoice(this.props.hostAGame.selectedDate, this.props.hostAGame.selectedTime);
    this.props.initRegion(this.props.user.location);
    this.props.navigation.navigate('ChooseLocation');
  }

  render () {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.content}>
          <View style={{ alignItems: 'center' }}>
            <CalendarPicker
              onDateChange={(date) => this.props.selectDate(date)}
              selectedDayColor={colors.SELECTED}
              minDate={moment().startOf('day')}
            />
          </View>
          <DatePickerIOS
            mode='time'
            date={(this.props.hostAGame.selectedTime) ? this.props.hostAGame.selectedTime._d : new Date()}
            onDateChange={(date) => this.props.selectTime(date)}
          />
        </View>
        <FooterBlockBtn
          onPress={() => this.onPressSaveBtn()}
          disabled={this.props.hostAGame.selectedDate === null || this.props.hostAGame.selectedTime === null}
        />
      </View>
    );
  }
}

let mapStoreToProps = ({ user, hostAGame }) => ({ user, hostAGame });

export default connect(mapStoreToProps, { selectDate, updateDateTimeChoice, selectTime, initRegion })(ChooseTimePage);