import { FETCH_LAUNCHES, TOGGLE_SORT, FILTER_YEAR } from '../consts';

const initialState = {
  launches: [],
  isAscending: true,
  activeYear: '',
};

const date = (object) => object.date_local;
const getYear = (object) => date(object).split('-')[0];

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
        launches: state.activeYear
          ? state.launches.filter(
              (launch) => Number(getYear(launch)) === Number(payload)
            )
          : state.launches,
      };
    default:
      return state;
  }
};

export default rootReducer;
