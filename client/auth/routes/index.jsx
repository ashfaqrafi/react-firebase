import React from 'react';
import toastr from 'toastr';
import { Route, IndexRedirect } from 'react-router';
import ClientLoginContainer from '../containers/Login.jsx';
import RegistrationContainer from '../containers/Registration.jsx';

export default function () {
  return (
    <Route path='client'>
        {/*<Route path='auth'>    */}
      <IndexRedirect to='login' />
      <Route path='login' component={ClientLoginContainer} />
      <Route path='register' component={RegistrationContainer} />
      {/*<Route path='logout' onEnter={signOut} />*/}
    </Route>
  );
}
