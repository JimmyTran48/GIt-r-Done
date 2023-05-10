import * as types from '../constants/actionTypes';

const initialState = {
  team: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_TEAM:
      return {
        ...state,
        team: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducers;
