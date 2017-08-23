import '../public/stylesheets/main.css';
import 'bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as firebase from 'firebase';

import './config.jsx';

import store from './store.jsx';
import Routes from './routes.jsx';

{/*var config = {*/}
    {/*apiKey: "AIzaSyCcRoSVNJTxNW7YF8ZH81luchq-XXPSN_o",*/}
    {/*authDomain: "ashfaq-interview-1.firebaseapp.com",*/}
//     databaseURL: "https://ashfaq-interview-1.firebaseio.com",
//     projectId: "ashfaq-interview-1",
//     storageBucket: "ashfaq-interview-1.appspot.com",
//     messagingSenderId: "552013114341"
// };
// firebase.initializeApp(config);
// console.log('>>>>>>>>>>>>', config);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
