import './style.css'
import React, { Component } from 'react'


export default class Played extends Component {
  render() {
    const {Src , title , content} = this.props;
    return (
        <div className='played'>
          <img className='inner' src={Src} alt={title} />
          <p className='parag'>{content}</p>
        </div>
        
        
    )
  }
}
