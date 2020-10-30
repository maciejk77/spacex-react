import React, { useState } from 'react';
// import useStyles from './styles';
import './styles.css';

const Dropdown = ({ options, prompt, value, onChange }) => {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <div
        className="control"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <div className="selected-value">{value ? value : prompt}</div>
        <div className={`arrow ${open ? 'open' : null}`} />
      </div>
      <div className={`options ${open ? 'open' : null}`}>
        {options.map((option) => (
          <div
            key={option}
            className={`option ${value === option ? 'selected' : null}`}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option}
          </div>
        ))}
        {/* <div className="option"></div> */}
      </div>
    </div>
  );
};

export default Dropdown;
