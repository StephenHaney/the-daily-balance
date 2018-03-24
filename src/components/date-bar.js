import React, { Component } from 'react';

function DateBar() {
  return (
    <div class="date-bar">
      <button className="date-bar__btn-back">↫</button>

      <h6 className="date-bar__date">Fri Mar 23</h6>

      <button className="date-bar__btn-next date-bar__btn--disabled">↬</button>
    </div>
  );
}

export default DateBar;