import React, { Component } from 'react';
import toastr from 'toastr';

class DashboardComponent extends Component {
  componentDidMount() {
    toastr.info('Welcome to Ticket System.', 'Admin | Ticket');
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 text-center'>
          <img src='/images/mernjs.png' width='150px' alt='ticket' />
          <h1>Welcome to Ticket System</h1>
          <p>Admin Dashboard <small> in {process.env.NODE_ENV}</small></p>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
