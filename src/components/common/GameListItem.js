import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import PropTypes from 'prop-types';
import { getIconFor, buildGameSubtitle } from '../../utilities';


export default class GameListItem extends Component {

  render () {
    return (
      <View>
        <ListItem
          title={this.props.game.name}
          subtitle={buildGameSubtitle(this.props.game)}
          leftIcon={getIconFor(this.props.game.sportName, 50)}
          rightIcon={this.props.rightIcon}
          onPressRightIcon={this.props.onPressRightIcon}
          onPress={this.props.onPress}
        />
      </View>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  rightIcon: PropTypes.object,
  onPressRightIcon: PropTypes.func,
  editable: PropTypes.bool,
};

GameListItem.defaultProps = {
  editable: false,
};