import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { getIconFor, buildGameSubtitle } from '../../utilities';

export default class GameListItem extends Component {
  render () {
    return (
      <ListItem
        title={this.props.game.name}
        subtitle={buildGameSubtitle(this.props.game)}
        leftIcon={getIconFor(this.props.game.sportName, 50)}
        rightIcon={this.props.rightIcon}
        onPressRightIcon={this.props.onPressRightIcon}
        onPress={this.props.onPress}
      />
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired,
  rightIcon: PropTypes.object.isRequired,
  onPressRightIcon: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

GameListItem.defaultProps = {
  editable: false,
};