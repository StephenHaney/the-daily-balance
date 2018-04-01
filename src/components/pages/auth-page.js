import React, { Component } from 'react';
import firebase, { ui } from '../../firebase/firebase.js';
import { Redirect } from 'react-router-dom';
import { AppStateConsumer } from 'app.js';

// Store uiConfig variables:
const uiConfig = {
  signInSuccessUrl: '/home',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url
  tosUrl: '/privacy'
};

class AuthPage extends Component {
  componentDidMount() {
    if (this.props.appState.currentUser === null) {
      // no user logged in, start process:
      ui.start('#firebaseui-auth-container', uiConfig);
    }
  }

  render() {
    if (this.props.appState.currentUser !== null) {
      return ( <Redirect to={{ pathname: '/home' }}/> );
    }

    return (
      <div>
        <div id="firebaseui-auth-container"></div>
      </div>
    );
  }
};

export default props => (
  <AppStateConsumer>
    {context => <AuthPage {...props} appState={context} />}
  </AppStateConsumer>
);