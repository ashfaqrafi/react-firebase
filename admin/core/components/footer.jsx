import React, { Component } from 'react';

class FooterComponent extends Component {
  render() {
    return (
      <footer className='navbar navbar-fixed-bottom'>
        <div className='text-center'>
          <p>
            <small>
              <a href='#'>
                Ticketing System
              </a> &copy; 2017
            </small>
          </p>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
