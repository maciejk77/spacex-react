import React, { useEffect } from 'react';
import Main from '../Main';
import logo from '../../assets/spacex-logo.png';
import { fetchLaunches } from '../../actions';
import { useDispatch } from 'react-redux';
import reloadIcon from '../../assets/icon/refresh.png';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  // TODO dispatch RELOAD, to reset TOGGLE_SORT, SET_ACTIVE_YEAR and FETCH_LAUNCHES ?

  return (
    <div>
      <div style={styles.header}>
        <span>
          <img src={logo} height="25px" width="225px" alt="spacex-logo" />
          LAUNCHES
        </span>
        <span>
          Reload Data
          <img src={reloadIcon} style={{ backgroundColor: 'blue' }} />
        </span>
      </div>
      <Main />
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid red',
  },
};

export default App;
