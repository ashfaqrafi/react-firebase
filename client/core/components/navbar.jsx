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
            {localStorage.getItem('email') ?
                <ul className='nav navbar-nav navbar-right'>
                    <li className='dropdown'>
                        <Link
                            className='dropdown-toggle'
                            data-toggle='dropdown'
                            role='button'
                            aria-haspopup='true'
                            aria-expanded='false'>
                            <i className='fa fa-envelope' aria-hidden='true'/>
                            &nbsp;{localStorage.getItem('email')}&nbsp;
                            <span className='caret'/>
                        </Link>
                        <ul className='dropdown-menu'>
                            <li role='separator' className='divider'/>
                            <li>
                                <Link to='/client/logout'>
                                    <i className='fa fa-sign-out' aria-hidden='true'/> Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul> :
                <ul className='nav navbar-nav navbar-right'>
                    <li>
                        <a href='/admin' target='_blank'>
                            <i className='fa fa-sign-in' aria-hidden='true'/> Admin Login
                        </a>
                    </li>
                </ul>
            }
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
