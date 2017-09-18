import React, { Component } from 'react';
import { Link } from 'react-router';

class NavbarComponent extends Component {
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top admin-nav'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link to='/admin' className='navbar-brand'>
              Ticket <small>admin</small>
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            {/*<li><Link to='/admin/blogs'>Blog</Link></li>*/}
            {/*<li><Link to='/admin/users'>User</Link></li>*/}
          </ul>
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
                  <li>
                    <Link to='/admin/profile'>
                      <i className='fa fa-user-circle-o' aria-hidden='true'/> Profile
                    </Link>
                  </li>
                  <li role='separator' className='divider'/>
                  <li>
                    <Link to='/admin/auth/logout'>
                      <i className='fa fa-sign-out' aria-hidden='true'/> Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul> :
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/admin'>
                  <i className='fa fa-sign-in' aria-hidden='true'/> Login
                </Link>
              </li>
            </ul>
          }
        </div>
      </nav>
    );
  }
}

export default NavbarComponent;
