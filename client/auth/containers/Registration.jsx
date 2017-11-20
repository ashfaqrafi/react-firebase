import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClientRegistrationComponent from '../components/Registration.jsx';

import { clientRegisterUser } from '../actions/register.js';

class RegistrationContainer extends Component {
  render() {
    return (
      <ClientRegistrationComponent
        register={this.props.register} />
    );
  }
}

// Get apps store and pass it as props to RegistrationContainer
//  > whenever store changes, the RegistrationContainer will automatically re-render
function mapStateToProps(store) {
  return {
  };
}

// Get actions and pass them as props to to RegistrationContainer
const mapDispatch = (dispatch,ownProps) => {
  return {
      register: (email,pass) => dispatch(clientRegisterUser(email,pass)),
  };
}

// We don't want to return the plain RegistrationContainer (component) anymore,
// we want to return the smart Container
//  > RegistrationContainer is now aware of state and actions
export default connect(mapStateToProps, mapDispatch)(RegistrationContainer);
