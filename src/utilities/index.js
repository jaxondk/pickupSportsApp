import React from 'react';
import { Icon, Text } from 'react-native-elements';
import haversine from 'haversine';
import { sports, colors, icons } from '../constants';

const styles = {
  selectedIcon: { 
    borderBottomColor: colors.SELECTED, 
    borderBottomWidth: 10, 
    marginLeft: 17, 
    marginRight: 17,
  },
  unselectedIcon: {
    marginLeft: 17,
    marginRight: 17,
  },
};

//TODO - needs some serious refactoring
export const getIconFor = (name, size, selected, onPress) => {
  switch (name) {
    case sports.BASKETBALL:
      return <Icon type='ionicon' name='ios-basketball' containerStyle={sports.BASKETBALL === selected ? styles.selectedIcon : styles.unselectedIcon} 
        color={colors.BBALL_ORANGE} size={size} onPress={onPress} />;
    case sports.SOCCER:
      return <Icon type='material-community' name='soccer' containerStyle={sports.SOCCER === selected ? styles.selectedIcon : styles.unselectedIcon} 
        size={size-3} onPress={onPress} />;
    case sports.TENNIS:
      return <Icon type='ionicon' name='ios-tennisball' containerStyle={sports.TENNIS === selected ? styles.selectedIcon : styles.unselectedIcon} 
        color={colors.TENNIS_GREEN} size={size} onPress={onPress} />;
    case icons.CLOCK.name:
      return <Icon type='font-awesome' name='clock-o' size={size} />
    case icons.CAL.name:
      return <Icon type='font-awesome' name='calendar' size={size} />
    case icons.PENCIL.name:
      return <Icon type={icons.PENCIL.type} name={icons.PENCIL.name} size={size} />
    case icons.LOCATION.name:
      return <Icon type={icons.LOCATION.type} name={icons.LOCATION.name} size={size} />
    default: //TODO
      return <Icon type='simple-line-icon' name='emotsmile' color={selected ? colors.SELECTED : null}
        size={size} onPress={onPress} />;
  }
}

export const getPinColor = (sportName) => {
  switch (sportName) {
    case sports.BASKETBALL:
      return colors.BBALL_ORANGE;
    case sports.SOCCER:
      return 'black';
    case sports.TENNIS:
      return colors.TENNIS_GREEN;
    default:
      return null;
  }
};

export const buildGameSubtitle = (game) => {
  return (
    <Text>
      <Icon type='font-awesome' name='calendar' size={12} /> {game.moment.format('MM/DD')} {/*TODO - inline icons*/}
      <Icon type='font-awesome' name='clock-o' size={12} /> {game.moment.format('h:mm A')}
    </Text>
  )
}

export const displayDistance = (location1, location2) => {
  return haversine(location1, location2, { unit: 'mile' }).toFixed(2) + ' mi'
}

// Removes element from array in place
export const removeElement = (array, elementToRemove) => {
  const i = array.indexOf(elementToRemove);
  if (i > -1) {
    array.splice(i, 1);
  }
}
