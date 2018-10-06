import React from 'react';
import { Icon } from 'react-native-elements';
import { sports, colors } from '../constants';

export const getIconFor = (sport) => {
  switch (sport) {
    case sports.SOCCER:
      return <Icon type='material-community' name='soccer' size={50} />;
    case sports.BASKETBALL:
      return <Icon type='ionicon' name='ios-basketball' color={colors.BBALL_ORANGE} size={50} />;
    case sports.VOLLEYBALL:
      return <Icon type='material-community' name='volleyball' size={50} />;
    default:
      return <Icon type='simple-line-icon' name='emotsmile' size={50} />;
  }
}

const to12HrTimeStr = (time) => {
  var amOrPm = time.hr > 11 ? 'PM' : 'AM';
  var hr = time.hr > 12 ? time.hr - 12 : time.hr;
  var min = time.min < 10 ? '0' + time.min : time.min;
  return hr + ':' + min + ' ' + amOrPm;
}

// Can display a single time or, if time2 included, a time range
export const displayTime = (time1, time2) => {
  var displayTime = to12HrTimeStr(time1);
  if (time2) {
    displayTime += '-' + to12HrTimeStr(time2)
  }
  return displayTime;
}
