import { FETCH_LAUNCHES } from '../consts';

const initialState = {
  launches: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LAUNCHES:
      return { ...state, launches: payload };
    default:
      return state;
  }
};

export default rootReducer;
