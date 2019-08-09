import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <div className='nav-link-box'>
            <Link to='/'>
              <h4>Home</h4>
            </Link>
          </div>
         
          <div className='nav-link-box'>
            <Link to='/thelist'>
              <h4>Restaurant List</h4>
            </Link>
        </div>
      </div >
      </div>
    );
  }
}

export default NavBar;