import React, { } from 'react';
import { AppStateConsumer } from 'app.js';

function DateBar(props) {
  const userImageUrl = props.appState.currentUser ? props.appState.currentUser.photoURL : null;
  const userImage = userImageUrl ? (
    <img className="date-bar__user-image" src={ userImageUrl } />
  ) : null;

  return (
    <div className="date-bar">
      <button className="date-bar__btn-back">↫</button>

      <h6 className="date-bar__date">Fri Mar 23</h6>

      <button className="date-bar__btn-next date-bar__btn--disabled">↬</button>
      
      { userImage }
    </div>
  );
}

export default props => (
  <AppStateConsumer>
    {context => <DateBar {...props} appState={context} />}
  </AppStateConsumer>
);