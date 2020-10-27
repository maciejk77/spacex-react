import { BASE_URL, FETCH_LAUNCHES } from '../consts';

export const fetchLaunches = () => async (dispatch) => {
  const response = await fetch(BASE_URL);
  const jsonResponse = await response.json();

  dispatch({
    type: FETCH_LAUNCHES,
    payload: jsonResponse,
  });
};
