import './style.css'
import React, { Component } from 'react'


export default class Card extends Component {
   
  render() {
    const { ImgName,srcImg,titleImg,CardTitel,HeaderName } = this.props;
    return (
      <div className='Card'>
        <img className={ImgName} src={srcImg} alt={titleImg} />
        <p className={HeaderName}>{CardTitel}</p>
    
      </div>
    )
  }
}
