import React, { } from 'react';

import { AppStateConsumer } from 'app.js';

import CheckInGrid from '../check-in-grid';
import MoodGrid from '../mood-grid';

function HomePage() {
  return(
    <div>
      <MoodGrid />
      <CheckInGrid />
    </div>
  )
}

export default props => (
  <AppStateConsumer>
    {context => <HomePage {...props} appState={context} />}
  </AppStateConsumer>
);