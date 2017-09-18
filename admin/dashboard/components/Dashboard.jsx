import React, { Component } from 'react';
import toastr from 'toastr';
import { Link, browserHistory } from 'react-router';

class DashboardComponent extends Component {
  componentDidMount() {
    toastr.info('Welcome to Ticket System.', 'Admin | Ticket');
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 text-center'>
          <h1><b>Welcome to Ticket System: Admin Dashboard</b></h1>
          <h3>
              <Link to="/admin/admindashboard">Here are the List of Tickets</Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
