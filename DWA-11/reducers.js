import * as actions from './actions.js';

const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD:
      return { count: state.count + 1 };
    case actions.SUBTRACT:
      return { count: state.count - 1 };
    case actions.RESET:
      return { count: 0 };
    default:
      return state;
  }
};

export default counterReducer;
