import React from 'react';

const List = ({ launches }) => (
  <ul style={styles.list}>
    {launches.map((launch, index) => (
      <li key={index}>
        `#{index + 1}` {launch.name} {launch.date_local} {}
      </li>
    ))}
  </ul>
);

const styles = {
  list: { border: '1px solid blue' },
};

export default List;
