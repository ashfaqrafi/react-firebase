import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, browserHistory } from 'react-router';
import toastr from 'toastr';
import firebase from 'firebase';

class AdminLoginComponent extends Component {
    componentDidMount () {
        const adminEmail = document.getElementById('adminEmail');
        const adminPassword = document.getElementById('adminPassword');
        const loginBttn = document.getElementById('loginBttn');
        const logoutBttn = document.getElementById('logoutBttn');

    };

    render() {
        return (
            <div className='row'>
              <div className='col-xs-12 text-center'>
                <h1 className='title'>Welcome to ticketing system: Admin Panel</h1>
              </div>
              <div className='col-xs-4 col-xs-offset-4'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className='form-group'>
                    <label htmlFor='emailAddress'>Email address</label>
                    <input
                        ref='emailAddress'
                        type='email'
                        className='form-control'
                        id="adminEmail"
                        placeholder='Email Address' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        ref='password'
                        type='password'
                        className='form-control'
                        id="adminPassword"
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
                        to='/admin/auth/register'
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

        console.log(this.props)
        this.props.login(emailAddress, password)
            .then(res => {
                toastr.success(res.message, 'Ticketing System');
                browserHistory.push('/admin/admindashboard');
            })
            .catch(e => {
                toastr.error(e.message, 'Ticketing System');
            })
    }
}

export default AdminLoginComponent;

