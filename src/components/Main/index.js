import React, { useState } from 'react';
import List from '../List';
import { useSelector, useDispatch } from 'react-redux';
import launchPhoto from '../../assets/img/launch-home.png';
import sortIcon from '../../assets/icon/sort.png';
// import { FILTER_BY_DATE } from '../../consts';

const Main = () => {
  // const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches);
  console.log(launches[0]);
  const [isAscending, setIsAscending] = useState(true);
  const [yearFilter, setYearFilter] = useState(null);

  const date = (string) => string.date_local;
  const years = launches.map((l) => date(l).split('-')[0]);
  const uniqueYears = [...new Set(years)];

  const sortedLaunches = isAscending
    ? launches.sort((a, b) => date(a).localeCompare(date(b)))
    : launches.sort((a, b) => date(b).localeCompare(date(a)));

  const filteredLaunches = (year) => {
    if (!year) return sortedLaunches;
    return sortedLaunches.filter((l) => date(l).split('-')[0] === year);
  };

  // TODO dispatch SET_ACTIVE_YEAR ?
  // TODO dispatch TOGGLE_SORT ?

  return (
    <div>
      <div style={styles.buttons}>
        <select onChange={(e) => setYearFilter(e.target.value)}>
          <option value="">Filter by Year</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button onClick={() => setIsAscending(!isAscending)}>
          {`Sort ${isAscending ? 'Descending' : 'Ascending'}`}
          <img src={sortIcon} style={{ backgroundColor: 'blue' }} />
        </button>
      </div>
      <div style={styles.flex}>
        <img src={launchPhoto} style={styles.photo} width="300" height="400" />
        <List launches={filteredLaunches(yearFilter)} />
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
