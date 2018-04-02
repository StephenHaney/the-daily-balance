import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

/* Firebase */
import firebase from './firebase/firebase';

/* Routes */
import routes from 'routes';

/* Components */
import AuthOverlay from 'components/auth-overlay';
import DateBar from 'components/date-bar';
import FooterBar from 'components/footer-bar';
import Loader from 'components/loader';

const AppStateContext = React.createContext();

class App extends Component {
  constructor() {
    super();

    // This state is available to all components via the AppStateContext.Consumer, exported
    this.state = {
      currentUser: null,
      readyToRender: false,
    };
  }

  componentWillMount() {
    // Wire up the grab for logged in users
    // this will set the value as null if the user isn't logged in...
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ currentUser: user, readyToRender: true });
    });
  }

  render() {
    let content = (
      <div className="the-daily-balance-app">
        <div className="egg">:D</div>
        <AuthOverlay />
        <DateBar />
        {routes}
        <FooterBar />
      </div>
    );
    
    return (
      <AppStateContext.Provider value={ this.state }>
        <Router>
          { this.state.readyToRender ? content : (<Loader />) }
        </Router>
      </AppStateContext.Provider>
    );
  }
}

const AppStateConsumer = AppStateContext.Consumer;
export { App as default, AppStateConsumer };