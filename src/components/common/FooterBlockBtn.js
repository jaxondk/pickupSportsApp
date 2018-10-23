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

export default class FooterBlockBtn extends Component {
  render () {
    var bgColorStyle = this.props.disabled ? { backgroundColor: this.props.disabledColor } : { backgroundColor: this.props.bgColor };
    return (
      <TouchableOpacity
        style={[styles.footerBtn, bgColorStyle]}
        onPress={() => this.props.disabled ? null : this.props.onPress()}
        disabled={this.props.disabled}
      >
        <Text h3 style={{ color: 'white' }}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

FooterBlockBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
  disabledColor: PropTypes.string,
  text: PropTypes.string,
};

FooterBlockBtn.defaultProps = {
  disabled: false,
  bgColor: colors.PRIMARY,
  disabledColor: colors.SILVER,
  text: 'Save',
}