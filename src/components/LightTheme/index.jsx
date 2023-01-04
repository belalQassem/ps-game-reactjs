import React, { Component } from 'react'
import './style.css'
import Theme from '../../assets/Theme.png'
import Sun from '../../assets/Sun.png'

export default class LightTheme extends Component {
  render() {
    return (
      <div className='LightTheme'>
        <img className='one' src={Theme} alt="Theme" />
        <img className='tow' src={Sun} alt="Sun" />
      </div>
    )
  }
}
