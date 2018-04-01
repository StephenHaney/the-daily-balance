import React, { } from 'react';

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

export default HomePage;