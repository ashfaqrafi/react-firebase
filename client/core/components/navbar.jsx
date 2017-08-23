import React, { Component } from 'react';
import { Link } from 'react-router';

class NavbarComponent extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top client-navbar'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/' className='navbar-brand'>
              Ticket <small>System</small>
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            {/*<li><Link to='/blogs'>Blog</Link></li>*/}
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/admin' target='_blank'>
                <i className='fa fa-sign-in' aria-hidden='true'></i> Admin Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
