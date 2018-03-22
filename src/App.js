import React, { Component } from 'react';
import CheckInGrid from './components/check-in-grid';
import MoodGrid from './components/mood-grid';
import DateBar from './components/date-bar';

import FooterBar from './components/footer-bar';

const firebase = require('firebase');
const firebaseui = require('firebaseui');

class App extends Component {
  render() {
    return (
      <div className="the-daily-balance-app">
        <DateBar />
        <CheckInGrid />
        <MoodGrid />


        <FooterBar />
      </div>
    );
  }
}

export default App;
