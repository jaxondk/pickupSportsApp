import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../constants';
import { Button } from 'react-native-elements';

const styles = {
  fabContainer: {
    borderRadius: 20,
    width: '50%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    left: 75,
  },
}

export default class FAB extends Component {
  render () {
    return (
      <Button
        raised
        icon={this.props.icon}
        title={this.props.title}
        borderRadius={20}
        containerViewStyle={styles.fabContainer}
        backgroundColor={colors.ACCENT}
        onPress={this.props.onPress}
      />
    );
  }
}

FAB.propTypes = {
  onPress: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
};

FAB.defaultProps = {
  bgColor: colors.ACCENT,
  title: 'Filter Games',
  icon: { name: 'filter-list' },
}