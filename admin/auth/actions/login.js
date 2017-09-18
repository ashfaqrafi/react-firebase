import axios from 'axios';
import toastr from 'toastr';
import { Link, browserHistory } from 'react-router';
/*
 * Get all user
 */
const config = {
    apiKey: "AIzaSyCcRoSVNJTxNW7YF8ZH81luchq-XXPSN_o",
    authDomain: "ashfaq-interview-1.firebaseapp.com",
    databaseURL: "https://ashfaq-interview-1.firebaseio.com",
    projectId: "ashfaq-interview-1",
    storageBucket: "ashfaq-interview-1.appspot.com",
    messagingSenderId: "552013114341"
};
firebase.initializeApp(config);

export const adminloginUser = (email, password) => {
    return function (dispatch) {
      dispatch({ type: 'AUTH_LOGIN_REQUEST' });
        const auth = firebase.auth();

        return auth.signInWithEmailAndPassword(email,password)
            .then(res => {
                dispatch({ type: 'AUTH_LOGIN_SUCCESS' , payload: res});
                return res
            })
            .catch(err => console.log('ERRROR', err))
    };
  }