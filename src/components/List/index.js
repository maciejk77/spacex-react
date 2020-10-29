import React from 'react';
import { useSelector } from 'react-redux';
import { getYearWithoutTime } from '../../utils';
import useStyles from './styles';

// unable to find rocket type on API hence fixed FALCON 1/9

const List = () => {
  const classes = useStyles();
  const launches = useSelector((state) => state.launches);
  return (
    <ul className={classes.list}>
      {launches.map(({ id, name, date_local }, index) => (
        <li className={classes.item} key={id}>
          <div className={classes.indexName}>{`#${index + 1} ${name}`}</div>
          <div>
            <div className={classes.date}>{`${getYearWithoutTime(
              date_local
            )}`}</div>
            <div className={classes.rocket}>FALCON 1/9</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
