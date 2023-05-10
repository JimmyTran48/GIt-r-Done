import * as types from '../constants/actionTypes';

const initialState = {
  team: false,
  users: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEAM:
      return {
        ...state,
        team: action.payload,
      };
    case types.UPDATE_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducers;
