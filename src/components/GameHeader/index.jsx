import './style.css'
import React, { Component } from 'react'

export default class GameHeader extends Component {
  render() {
    return (
      <div className='GameHeader'>
        <div className='GameLogo'></div>
        <p className='Welcome'>Welcome back,<br></br>Jenny!</p>
      </div>
    )
  }
}
