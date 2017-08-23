import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import CoreLayout from './core/layouts/index.jsx';
import NotFoundComponent from './core/components/notFound.jsx';

import ClientLoginComponent from '../client/auth/components/Login.jsx';
import ClientRegistrationComponent from '../client/auth/components/Registration.jsx';

import homeRoute from './home/routes/index.jsx';
import clientdashboardRoute from './ClientHome/routes/index.jsx';
import ClientTicketSubmitComponent from '../client/ClientHome/components/addTicket.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={CoreLayout}>
          <IndexRedirect to='home'/>
            <Route path='login' component={ClientLoginComponent} />
            <Route path='register' component={ClientRegistrationComponent} />
            <Route path='add-ticket' component={ClientTicketSubmitComponent} />
          {homeRoute()}
          {clientdashboardRoute()}
          <Route path='*' component={NotFoundComponent} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
