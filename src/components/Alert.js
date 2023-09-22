import React, { useState } from 'react';

const Alert = ({ updateFunction, toggleVisible }) => {
  const handleChange = (e) => {
    updateFunction(e.target.value);
  };

  const handleToggle = () => {
    toggleVisible((current) => !current);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Write something"
      />
      <button onClick={handleToggle}>Send</button>
    </div>
  );
};

export default Alert;
