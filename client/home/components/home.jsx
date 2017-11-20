import React, { Component } from 'react';
import toastr from 'toastr';
import { Link } from 'react-router';


class HomeComponent extends Component {
  componentDidMount() {
    toastr.info('Welcome to Ticketing System.', 'Client | Ticket');
  }

  render() {
    return (
      <div className='row'>
        <div className='col-xs-12 text-center'>
          <h1><b>Welcome to Ticketing System</b></h1>
          <h3>Create ticket about your feedback or complaint and get response from our managers</h3>
            <div>
                <h4 className="mtop-3">Want to create a ticket?</h4>
                <p className="home-click-login">
                    <Link to="/client/login">Click here</Link>
                </p>
            </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
