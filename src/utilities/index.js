import React from 'react';
import { Icon, Text } from 'react-native-elements';
import { sports, colors } from '../constants';

export const getIconFor = (sport, size, selected, onPress) => {
  switch (sport) {
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

// const to12HrTimeStr = (time) => {
//   var amOrPm = time.hr > 11 ? 'PM' : 'AM';
//   var hr = time.hr > 12 ? time.hr - 12 : time.hr;
//   var min = time.min < 10 ? '0' + time.min : time.min;
//   return hr + ':' + min + ' ' + amOrPm;
// }

// // Can display a single time or, if time2 included, a time range
// export const displayTime = (time1, time2) => {
//   var displayTime = to12HrTimeStr(time1);
//   if (time2) {
//     displayTime += '-' + to12HrTimeStr(time2)
//   }
//   return displayTime;
// }
