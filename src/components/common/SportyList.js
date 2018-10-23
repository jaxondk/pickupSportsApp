import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { getIconFor, buildGameSubtitle } from '../utilities';
import { colors } from '../constants';
import { removeSubscribedSport, joinGame } from '../actions';

export default class SportyList extends Component {
  render () {
    var iconName = 'cancel';
    var iconColor = colors.CANCEL;
    var iconType;
    if (this.props.rightIconPurpose === 'join') {
      iconName = 'ios-checkmark-circle-outline';
      iconColor = colors.SELECTED;
      iconType = 'ionicon';
    }
    var sportNameKey = 'sportName'
    if (this.props.type === 'sport') {
      sportNameKey = 'name';
    }

    return (
      <List>
        {
          this.props.data.map((item) => (
            <ListItem
              key={item.id}
              title={item.name}
              subtitle={this.props.buildSubtitle}
              leftIcon={getIconFor(item[sportNameKey], 50)}
              rightIcon={{ type: iconType, name: iconName, color: iconColor }}
              onPressRightIcon={this.props.onPressIcon}
              onPress={this.props.onPress}
            />
          ))
        }
      </List>
    );
  }
}

SportyList.propTypes = {
  data: PropTypes.array.isRequired,
  buildSubtitle: PropTypes.func.isRequired,
  onPressIcon: PropTypes.func.oneOf([removeGame, removeSubscribedSport, joinGame]).isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['game', 'sport']),
  rightIconPurpose: PropTypes.oneOf(['remove', 'join']),
};

//Default list is one of expandable games with a remove icon. 
SportyList.defaultProps = {
  type: 'game',
  rightIconPurpose: 'remove',
  // buildSubtitle: (item) => buildGameSubtitle(item),
  // onPressIcon: removeGame,
  // onPress: null, //TODO
};