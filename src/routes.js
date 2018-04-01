import React from "react";
import { Route, Redirect } from "react-router"

import firebase from './firebase/firebase';

/* Pages */
import AuthPage from 'components/pages/auth-page';
import HomePage from 'components/pages/home-page';
import ChartsPage from 'components/pages/charts-page';
import SettingsPage from 'components/pages/settings-page';

/* Cheesy PrivateRoute wrapper component from react router docs */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      firebase.auth().currentUser ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

/* Actual routes */
const routes = (
  <main>
    <PrivateRoute exact path="/" component={HomePage} />
    <PrivateRoute path="/charts" component={ChartsPage} />
    <PrivateRoute path="/settings" component={SettingsPage} />
  </main>
);

export default routes;