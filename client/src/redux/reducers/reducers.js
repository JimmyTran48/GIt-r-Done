import * as types from '../constants/actionTypes';

const initialState = {
  user: true,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default reducers;
