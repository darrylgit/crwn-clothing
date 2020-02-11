import { userActionTypes } from './user.types';

export const setCurrentUser = user => {
  return {
    type: userActionTypes.setCurrentUser,
    payload: user
  };
};
