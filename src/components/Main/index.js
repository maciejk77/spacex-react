import React from 'react';
import List from '../List';
import { useSelector } from 'react-redux';

const Main = () => {
  const launches = useSelector((state) => state.launches);
  console.log(launches[0]);

  return (
    <div>
      <div style={styles.buttons}>
        <div>[Filter by Year]</div>
        <div>[Sort Descending]</div>
      </div>
      <div style={styles.flex}>
        <div style={styles.photo}>Photo</div>
        <List launches={launches} />
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
  photo: { width: '50%', border: '1px solid red' },
};

export default Main;
