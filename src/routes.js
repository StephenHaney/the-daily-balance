import React from "react";
import { Route } from "react-router"

/* Pages */
import HomePage from 'components/pages/home-page';
import ChartsPage from 'components/pages/charts-page';
import SettingsPage from 'components/pages/settings-page';

/* Actual routes */
const routes = (
  <main>
    <Route exact path="/" component={HomePage} />
    <Route path="/charts" component={ChartsPage} />
    <Route path="/settings" component={SettingsPage} />
  </main>
);

export default routes;