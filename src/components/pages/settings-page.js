import React, { } from 'react';

import { AppStateConsumer } from 'app.js';

function SettingsPage(props) {
  if (props.appState.readyToRender === false) { return null; }

  return(
    <div>
      Settings
    </div>
  )
}

export default props => (
  <AppStateConsumer>
    {context => <SettingsPage {...props} appState={context} />}
  </AppStateConsumer>
);