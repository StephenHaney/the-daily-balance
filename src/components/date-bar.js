import React, { Component } from 'react';

function DateBar() {
  return (
    <div class="date-bar">
      <button className="date-bar__back-btn">back</button>

      <h4 className="date-bar__date">Date</h4>

      <button className="date-bar__next-btn">next</button>
    </div>
  );
}

export default DateBar;