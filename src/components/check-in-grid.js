import React, { Component } from 'react';

function CheckInGrid() {
  return (
    <div className="check-in-grid">
      <h3>Today I spent time with ... </h3>
      <ul className="check-in-grid__list">
        <li>Friends</li>
        <li>Family</li>
        <li>Partner</li>
        <li>Hobbies</li>
        <li>Home</li>
        <li>Career</li>
        <li>Exercise</li>
        <li>Nutrition</li>
        <li>Spirituality</li>
      </ul>
    </div>
  );
}

export default CheckInGrid;