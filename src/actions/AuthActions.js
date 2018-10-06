import { USER_LOGGED_IN } from '../constants';

export const mockLogUserIn = (user) => {
  return ({
    type: USER_LOGGED_IN,
    payload: user,
  });
};