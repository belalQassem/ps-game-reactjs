import './style.css'
import React, { Component } from 'react'
import alkass  from  '../../assets/alkass.png'
export default class Most extends Component {
  render() {
    return (
      <div className='most'>
        <img className='alkass' src={alkass} alt="alkass" />
        <p className='headp'>perfect KILL streak
You are in the 0.5% </p>
        <div className='layout'>
          <p className='contentt'>assassin's creed odyssey
          </p>
          <p className='conte'>last played: 34 hours ago</p>
        </div>
      </div>
    )
  }
}
