import React from 'react';
import List from '../List';
import { useSelector, useDispatch } from 'react-redux';
import launchPhoto from '../../assets/img/launch-home.png';
import sortIcon from '../../assets/icon/sort.png';
import { FILTER_YEAR, TOGGLE_SORT } from '../../consts';

const Main = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);
  const isAscending = useSelector((state) => state.isAscending);
  // console.log(launches[0]);

  const date = (string) => string.date_local;
  const years = launches.map((l) => date(l).split('-')[0]);
  const uniqueYears = [...new Set(years)];

  const handleChange = (e) =>
    dispatch({ type: FILTER_YEAR, payload: e.target.value });

  const handleClick = (e) => dispatch({ type: TOGGLE_SORT });

  return (
    <div>
      <div style={styles.buttons}>
        <select onChange={handleChange}>
          <option value="">Filter by Year</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button onClick={handleClick}>
          {`Sort ${isAscending ? 'Descending' : 'Ascending'}`}
          <img
            alt="sort-icon"
            src={sortIcon}
            style={{ backgroundColor: 'blue' }}
          />
        </button>
      </div>
      <div style={styles.flex}>
        <img
          alt="launch"
          src={launchPhoto}
          style={styles.photo}
          width="300"
          height="400"
        />
        <List />
      </div>
    </div>
  );
};

const styles = {
  flex: {
    display: 'flex',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    border: '1px solid green',
  },
  photo: { border: '1px solid red' },
};

export default Main;
