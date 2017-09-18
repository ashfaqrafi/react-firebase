import React from 'react';
import toastr from 'toastr';
import { Route, IndexRedirect } from 'react-router';

import AdminLoginContainer from '../containers/Login.jsx';
import AdminRegistrationComponent from '../components/Registration.jsx';

export default function () {
  return (
    <Route path='auth'>
      <IndexRedirect to='login' />
      <Route path='login' component={AdminLoginContainer} />
      <Route path='register' component={AdminRegistrationComponent} />
      {/*<Route path='logout' onEnter={signOut} />*/}
    </Route>
  );
}
