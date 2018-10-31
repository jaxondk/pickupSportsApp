import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_BLUE,
  },
  errorTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  errorDescription: {
    textAlign: 'center',
    color: colors.DARK_GRAY,
    marginLeft: 15,
    marginRight: 15,
  },
};

/**
 * This is a component to use when somethign out of the ordinary happens and you want to replace your component
 * with a fullscreen view a title and description centered in the screen.
 *
 * @prop {string.isRequired} title - the main message. It's a title so keep it short.
 * @prop {string.isRequired} description - a description to add more detail.
 * @prop {bool} loading - if you want a spinner to show something is loading, set this to true.
 */

export default class FullScreenTextView extends Component {
  renderSpinner () {
    if (this.props.loading) {
      return (<ActivityIndicator size='large' color={colors.PRIMARY} />);
    }
  }

  renderFAB() {

  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderSpinner()}
        <Text style={styles.errorTitle}>
          {this.props.title}
        </Text>
        <Text style={styles.errorDescription}>
          {this.props.description}
        </Text>
        {this.props.FAB}
      </View>
    );
  }
}

FullScreenTextView.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  FAB: PropTypes.any,
  loading: PropTypes.bool,
};
