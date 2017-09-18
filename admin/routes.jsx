import React, { Component } from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import CoreLayout from './core/layouts/index.jsx';
import NotFoundComponent from './core/components/notFound.jsx';

import AdminLoginComponent from '../admin/auth/components/Login.jsx';
import AdminRegistrationComponent from '../admin/auth/components/Registration.jsx';

import admindashboardRoute from './AdminHome/routes/index.jsx';
import TicketDescriptionComponent from './AdminHome/components/TicketDescription.jsx';


import authRoute from './auth/routes/index.jsx';
import dashboardRoute from './dashboard/routes/index.jsx';
import userRoute from './users/routes/index.jsx';
import blogRoute from './blogs/routes/index.jsx';

class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='admin' component={CoreLayout}>
          <IndexRedirect to='dashboard'/>
          {authRoute()}
          {dashboardRoute()}
          {userRoute()}
          {blogRoute()}
          {admindashboardRoute()}
            <Route path='ticket-description' component={TicketDescriptionComponent} />
          <Route path='*' component={NotFoundComponent} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
