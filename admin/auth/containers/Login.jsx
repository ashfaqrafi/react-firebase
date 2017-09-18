import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AdminLoginComponent from '../components/Login.jsx';

import { adminloginUser } from '../actions/login.js';

class LoginContainer extends Component {
  render() {
    return (
      <AdminLoginComponent
          login={this.props.login} />
    );
  }
}

// Get apps store and pass it as props to LoginContainer
//  > whenever store changes, the LoginContainer will automatically re-render
function mapStateToProps(store) {
  return {
  };
}

// Get actions and pass them as props to to LoginContainer

const mapDispatch = (dispatch,ownProps) => {
  return {
      login: (email,pass) => dispatch(adminloginUser(email,pass)),
  }
}

// We don't want to return the plain LoginContainer (component) anymore,
// we want to return the smart Container
//  > LoginContainer is now aware of state and actions
export default connect(mapStateToProps, mapDispatch)(LoginContainer);
