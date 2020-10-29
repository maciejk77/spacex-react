import {
  FETCH_LAUNCHES,
  TOGGLE_SORT,
  FILTER_YEAR,
  RESET_FILTER,
} from '../consts';
import { date, getYear } from '../utils';

const initialState = {
  launches: [],
  isAscending: true,
  activeYear: '',
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LAUNCHES:
      return { ...state, launches: payload };
    case TOGGLE_SORT:
      return {
        ...state,
        isAscending: !state.isAscending,
        launches: state.isAscending
          ? state.launches.sort((a, b) => date(b).localeCompare(date(a)))
          : state.launches.sort((a, b) => date(a).localeCompare(date(b))),
      };
    case FILTER_YEAR:
      return {
        ...state,
        activeYear: payload,
        launches: state.launches.filter(
          (launch) => getYear(launch) === payload
        ),
      };
    case RESET_FILTER:
      return { ...state, activeYear: '', isAscending: true }; // doesn't work
    default:
      return state;
  }
};

export default rootReducer;
