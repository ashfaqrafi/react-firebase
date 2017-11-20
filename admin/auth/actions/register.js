import axios from 'axios';
import toastr from 'toastr';
import { Link, browserHistory } from 'react-router';
import {firebaseAuth} from '../../../firebase/config.js';
/*
 * Get all user
 */
export const adminRegisterUser = (email, password) => {
    return function (dispatch) {
        dispatch({type: 'AUTH_REGISTER_REQUEST'});
        return firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                dispatch({type: 'AUTH_REGISTER_SUCCESS', payload: res});
                return res
            })
            .catch(err => console.log("ERROR", err))
    };
}
