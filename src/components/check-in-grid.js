import React, { } from 'react';

import CheckInGridItem from './check-in-grid-item';

function CheckInGrid() {
  let defaultOptions = [
    'Friends',
    'Family',
    'Partner',
    'Hobbies',
    'Home',
    'Career',
    'Exercise',
    'Nutrition',
    'Spirituality',
  ];

  return (
    <div className="check-in-grid">
      <h3>And I spent time with my </h3>
      <ul className="check-in-grid__list">
        { defaultOptions.map(option => (
          <CheckInGridItem item={option} />
        ))
        }
      </ul>
    </div>
  );
}

export default CheckInGrid;