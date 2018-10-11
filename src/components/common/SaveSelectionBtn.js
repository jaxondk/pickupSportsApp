import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

const styles = {
  footerBtn: {
    flex: 1,
    alignItems: 'center', //horizontal align
    justifyContent: 'center', //vertical align
  },
}

export default class SaveSelectionBtn extends Component {
  render() {
    var bgColorStyle = this.props.disabled ? { backgroundColor: colors.SILVER } : { backgroundColor: colors.PRIMARY };
    return (
      <TouchableOpacity 
        style={[styles.footerBtn, bgColorStyle]} 
        onPress={() => this.props.disabled ? null : this.props.onPress()} 
        disabled={this.props.disabled}
      >
        <Text h3 style={{ color: 'white' }}>Save</Text>
      </TouchableOpacity>
    );
  }
}

SaveSelectionBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};