import React from 'react'
import { Router, Switch, Route } from 'react-router';

import Home from '../pages/home';
import NotFound from './NotFound';

import{ history } from '../history';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;