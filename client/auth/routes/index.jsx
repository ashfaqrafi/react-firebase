import React from 'react';
import toastr from 'toastr';
import { Route, IndexRedirect } from 'react-router';

import ClientLoginComponent from '../components/Login.jsx';
import ClientRegistrationComponent from '../components/Registration.jsx';


// import LoginContainer from '../containers/Login.jsx';
// import RegistrationContainer from '../containers/Registration.jsx';

// function signOut(nextState, replaceState) {
//   localStorage.removeItem('token');
//   localStorage.removeItem('email');
//   toastr.success('Logout successfully', 'Ticketing System');
//   replaceState('/client/auth');
// }

export default function () {
  return (
    <Route path='client'>
        {/*<Route path='auth'>    */}
      <IndexRedirect to='login' />
      <Route path='login' component={ClientLoginComponent} />
      <Route path='register' component={ClientRegistrationComponent} />
      {/*<Route path='logout' onEnter={signOut} />*/}
    </Route>
  );
}
