import React from 'react';
import toastr from 'toastr';
import { Route, IndexRedirect } from 'react-router';

import ClientLoginContainer from '../containers/Login.jsx';
import ClientRegistrationComponent from '../components/Registration.jsx';

export default function () {
  return (
    <Route path='client'>
        {/*<Route path='auth'>    */}
      <IndexRedirect to='login' />
      <Route path='login' component={ClientLoginContainer} />
      <Route path='register' component={ClientRegistrationComponent} />
      {/*<Route path='logout' onEnter={signOut} />*/}
    </Route>
  );
}
