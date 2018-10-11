import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem, List } from 'react-native-elements';
import PropTypes from 'prop-types';
import { getIconFor, buildGameSubtitle, displayDistance } from '../../utilities';
import { icons } from '../../constants';

export default class GameListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {showDetails: false}
  }

  renderDetails() {
    if (this.state.showDetails) {
      return (
        <List>
          <ListItem
            title={' ' + this.props.game.moment.format('MM/DD') + ' at ' + this.props.game.moment.format('h:mm A')}
            leftIcon={getIconFor(icons.CLOCK.name, 24)}
            rightIcon={getIconFor(icons.PENCIL.name, 24)}
            hideChevron={!this.props.editable}
          // onPressRightIcon={navigate to edit} TODO
          />
          <ListItem
            title={' ' + displayDistance(this.props.userLocation, this.props.game.location)}
            leftIcon={getIconFor(icons.LOCATION.name, 24)}
            rightIcon={getIconFor(icons.PENCIL.name, 24)}
            hideChevron={!this.props.editable}
          // onPressRightIcon={navigate to edit} TODO
          />
        </List>
      );
    }
  }

  render () {
    return (
      <View>
        <ListItem
          title={this.props.game.name}
          subtitle={buildGameSubtitle(this.props.game)}
          leftIcon={getIconFor(this.props.game.sportName, 50)}
          rightIcon={this.props.rightIcon}
          onPressRightIcon={this.props.onPressRightIcon}
          onPress={() => this.setState((prevState) => {
            return {showDetails: !prevState.showDetails}
          })}
        />
        {this.renderDetails()}
      </View>
    );
  }
}

GameListItem.propTypes = {
  game: PropTypes.object.isRequired,
  userLocation: PropTypes.object.isRequired,
  rightIcon: PropTypes.object.isRequired,
  onPressRightIcon: PropTypes.func.isRequired,
  editable: PropTypes.bool,
};

GameListItem.defaultProps = {
  editable: false,
};