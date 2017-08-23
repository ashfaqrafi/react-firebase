import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import toastr from 'toastr';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCcRoSVNJTxNW7YF8ZH81luchq-XXPSN_o",
    authDomain: "ashfaq-interview-1.firebaseapp.com",
    databaseURL: "https://ashfaq-interview-1.firebaseio.com",
    projectId: "ashfaq-interview-1",
    storageBucket: "ashfaq-interview-1.appspot.com",
    messagingSenderId: "552013114341"
};
firebase.initializeApp(config);

class ClientLoginComponent extends Component {
    componentDidMount () {
        const clientEmail = document.getElementById('clientEmail');
        const clientPassword = document.getElementById('clientPassword');
        const loginBttn = document.getElementById('loginBttn');
        const logoutBttn = document.getElementById('logoutBttn');

        loginBttn.addEventListener('click',event => {
            const email = clientEmail.value;
            const password = clientPassword.value;
            const auth = firebase.auth();

            const promise = auth.signInWithEmailAndPassword(email,password);
            promise.catch(event => console.log(event,message));
        });

        logoutBttn.addEventListener('click',event =>{
           firebase.auth().signOut();
           toastr.info('You are signed out!');
        });

        firebase.auth().onAuthStateChanged(firebaseUser =>{
            if (firebaseUser){
                console.log(firebaseUser);
                logoutBttn.classList.remove('hide');
                loginBttn.classList.add('hide');
                toastr.info('You are logged in!');
            }else {
                console.log('not logged in');
                logoutBttn.classList.add('hide');
                loginBttn.classList.remove('hide');
                toastr.info('You are not logged in!');
            }
        });

    };

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 text-center'>
          <h1 className='title'>Welcome to ticketing system</h1>
        </div>
        <div className='col-xs-4 col-xs-offset-4'>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-group'>
              <label htmlFor='emailAddress'>Email address</label>
              <input
                ref='emailAddress'
                type='email'
                className='form-control'
                id="clientEmail"
                placeholder='Email Address' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                ref='password'
                type='password'
                className='form-control'
                id="clientPassword"
                placeholder='Password' />
            </div>
            <div className='col-xs-offset-6'>
              <button
                type='submit'
                id="loginBttn"
                className='btn btn-block btn-primary'>
                Sign In
              </button>
            </div>
              <div className='col-xs-offset-6 mtop-3'>
                  <button
                      type='submit'
                      id="logoutBttn"
                      className='btn btn-block btn-primary hide'>
                      Sign Out
                  </button>
              </div>
            <div className='text-center'>
              <p><br/>- OR -<br/></p>
              <Link
                to='/register'
                className='btn btn-block btn-default'
                id=""
              >
                Register a new account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }

  handleSubmit(event) {
    const _this = this;
    event.preventDefault();

    let emailAddress = ReactDOM.findDOMNode(_this.refs.emailAddress).value.trim();
    let password = ReactDOM.findDOMNode(_this.refs.password).value.trim();

    /*
     * Validation rules
     */
    if (emailAddress.length < 1) {
      toastr.warning('Email Address is required.', 'Ticketing System');
      return false;
    }

    if (password.length < 1) {
      toastr.warning('Password is required.', 'Ticketing System');
      return false;
    }

    this.props.ClientloginUser({
      emailAddress, password,
    }, function (err, res) {
      if (err) {
        console.error('ClientloginUser: ', err);
        toastr.error(err.message, 'Ticketing System');
      } else {
        console.log('ClientloginUser: ', res);
        toastr.success(res.message, 'Ticketing System');
        browserHistory.push('/clientdashboard');
      }
    });
  }
}

export default ClientLoginComponent;
