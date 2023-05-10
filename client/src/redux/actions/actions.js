import * as types from '../constants/actionTypes';

export const updateTeam = (team) => ({
  type: types.UPDATE_TEAM,
  payload: team,
});

export const updateUsers = (users) => ({
  type: types.UPDATE_USERS,
  payload: users,
});
