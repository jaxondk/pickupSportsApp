import React from 'react';
import { Icon, Text } from 'react-native-elements';
import haversine from 'haversine';
import { sports, colors, icons } from '../constants';

//TODO - needs some serious refactoring
export const getIconFor = (name, size, selected, onPress) => {
  switch (name) {
    case sports.SOCCER:
      return <Icon type='material-community' name='soccer' color={sports.SOCCER === selected ? colors.SELECTED : null} 
        size={size} onPress={onPress} />;
    case sports.BASKETBALL:
      return <Icon type='ionicon' name='ios-basketball' color={sports.BASKETBALL === selected ? colors.SELECTED : colors.BBALL_ORANGE} 
        size={size} onPress={onPress} />;
    // case sports.VOLLEYBALL:
    //   return <Icon type='font-awesome' name='volleyball-ball' size={size} onPress={onPress} />;
    case sports.TENNIS:
      return <Icon type='ionicon' name='ios-tennisball' color={sports.TENNIS === selected ? colors.SELECTED : colors.TENNIS_GREEN}
        size={size} onPress={onPress} />;
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
