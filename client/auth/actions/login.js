import axios from 'axios';
import toastr from 'toastr';
import { Link, browserHistory } from 'react-router';
import {firebaseAuth} from '../../../firebase/config.js';
/*
 * Get all user
 */
export const clientloginUser = (email, password) => {
    return function (dispatch) {
      dispatch({ type: 'AUTH_LOGIN_REQUEST' });
      return firebaseAuth.signInWithEmailAndPassword(email,password)
          .then(res=>{
              dispatch({type: 'AUTH_LOGIN_SUCCESS', payload: res});
              return res
          })
          .catch(err => console.log('ERROR', err))
  };
}
