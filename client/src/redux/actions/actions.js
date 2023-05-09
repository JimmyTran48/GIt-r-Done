import * as types from '../constants/actionTypes';

export const updateUser = (user) => ({
  type: types.UPDATE_USER,
  payload: user,
});
