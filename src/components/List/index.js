import React from 'react';
import { useSelector } from 'react-redux';
// unable to find rocket type on API hence fixed FALCON 1/9

const List = () => {
  const launches = useSelector((state) => state.launches);
  return (
    <ul style={styles.list}>
      {launches.map(({ name, date_local }, index) => (
        <li key={index}>
          {`#${index + 1} ${name} ${date_local.split('T')[0]} FALCON 1/9`}
        </li>
      ))}
    </ul>
  );
};

const styles = {
  list: { border: '1px solid blue' },
};

export default List;
