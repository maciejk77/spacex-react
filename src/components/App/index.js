import React, { useEffect } from 'react';
import Main from '../Main';
import logo from '../../assets/spacex-logo.png';
import { fetchLaunches } from '../../actions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  return (
    <div>
      <div style={styles.header}>
        <span>
          <img src={logo} height="25px" width="225px" alt="spacex-logo" />
          LAUNCHES
        </span>
        <div>[Reload Data]</div>
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
