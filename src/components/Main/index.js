import React, { useState } from 'react';
import List from '../List';
import Dropdown from '../Dropdown';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER_YEAR, TOGGLE_SORT } from '../../consts';
import { getYear } from '../../utils';
import useStyles from './styles';
import launchPhoto from '../../assets/img/launch-home.png';
import sortIcon from '../../assets/icon/sort.png';

const Main = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);
  const isAscending = useSelector((state) => state.isAscending);
  //console.log(launches[0]);

  const [value, setValue] = useState(null);

  const years = launches.map((launch) => getYear(launch));
  const uniqueYears = [...new Set(years)];

  const handleChange = (e) => {
    setValue(e);
    dispatch({ type: FILTER_YEAR, payload: e });
  };

  const handleClick = (e) => dispatch({ type: TOGGLE_SORT });

  return (
    <div>
      <div className={classes.buttons}>
        <Dropdown
          options={uniqueYears}
          prompt="Filter By Year"
          value={value}
          onChange={handleChange}
        />

        <div className={classes.button} onClick={handleClick}>
          {`Sort ${isAscending ? 'Descending' : 'Ascending'}`}
          <img alt="sort-icon" className={classes.sort} src={sortIcon} />
        </div>
      </div>

      <div className={classes.container}>
        <img alt="launch" src={launchPhoto} className={classes.photo} />
        <List />
      </div>
    </div>
  );
};

export default Main;
