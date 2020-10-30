import React, { useEffect, useCallback } from 'react';
import Main from '../Main';
import { fetchLaunches } from '../../actions';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import logo from '../../assets/spacex-logo.png';
import reloadIcon from '../../assets/icon/refresh.png';
import { RESET_FILTER } from '../../consts';

const App = () => {
  const dispatch = useDispatch();
  const loadData = useCallback(() => dispatch(fetchLaunches()), [dispatch]);
  const classes = useStyles();

  useEffect(() => {
    loadData();
    dispatch({ type: RESET_FILTER });
  }, [dispatch, loadData]);

  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img alt="spacex-logo" className={classes.logoIcon} src={logo} />
          <div className={classes.logoLabel}>LAUNCHES</div>
        </div>
        <span className={classes.reload} onClick={loadData}>
          Reload Data
          <img
            alt="reload-icon"
            height="8px"
            width="8px"
            className={classes.reloadImage}
            src={reloadIcon}
          />
        </span>
      </div>
      <Main />
    </div>
  );
};

export default App;
