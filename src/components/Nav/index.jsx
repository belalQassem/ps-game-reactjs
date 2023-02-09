import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import './style.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='list'>
        <button onClick={this.props.logout}>Logout</button>
        <NavLink style={{
    
          }}
          to="/Home"
        >
          <span className='home'>Home</span>
        </NavLink>
        <NavLink to="/Home/profile"
        >
        <span className='Profile'>Profile</span>
        </NavLink>

        {this.props.admin ? (
          <NavLink to="/Home/userslist"
          >
            <span className='UsersList'>Users List</span>
          </NavLink>
        ) : (
          ""
        )}
        {this.props.admin ? (
          <NavLink to="/Home/usersDetails"
          >
            <span className='usersDetails'>users Details</span>
          </NavLink>
        ) : (
          ""
        )}
      </div>
    );
  }
}