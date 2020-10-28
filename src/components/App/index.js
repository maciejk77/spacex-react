import React, { useEffect, useCallback } from 'react';
import Main from '../Main';
import { fetchLaunches } from '../../actions';
import { useDispatch } from 'react-redux';
import logo from '../../assets/spacex-logo.png';
import reloadIcon from '../../assets/icon/refresh.png';

const App = () => {
  const dispatch = useDispatch();
  const loadData = useCallback(() => dispatch(fetchLaunches()), [dispatch]);

  useEffect(() => {
    loadData();
  }, [dispatch, loadData]);

  return (
    <div>
      <div style={styles.header}>
        <span>
          <img alt="spacex-logo" src={logo} height="25px" width="225px" />
          LAUNCHES
        </span>
        <span onClick={loadData}>
          Reload Data
          <img
            alt="reload-icon"
            src={reloadIcon}
            style={{ backgroundColor: 'blue' }}
          />
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
