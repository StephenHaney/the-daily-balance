import React, { Component } from 'react';
import firebase, { ui } from '../firebase/firebase.js';
import { AppStateConsumer } from 'app.js';

// Store uiConfig variables:
const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url
  tosUrl: '/privacy'
};

class AuthOverlay extends Component {
  componentDidMount() {
    if (this.props.appState.currentUser === null) {
      // no user logged in, start process:
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }

  render() {
    // don't render the login if the user is logged in:
    if (this.props.appState.currentUser !== null) {
      return '';
    }

    return (
      <div className="auth-overlay">
        <div className="auth-card">
          <h2>Hello there!</h2>
          <h3>Sign in to get started</h3>
          <div id="firebaseui-auth-container"></div>
        </div>
      </div>
    );
  }
};

export default props => (
  <AppStateConsumer>
    {context => <AuthOverlay {...props} appState={context} />}
  </AppStateConsumer>
);