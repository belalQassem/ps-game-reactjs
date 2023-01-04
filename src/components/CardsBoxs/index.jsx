import './style.css'
import React, { Component } from 'react'
import Card from '../Card'
import  CodeWar from'../../assets/GOD OF WAR-2.png'
import SUPERMAN from '../../assets/SUPERMAN-2.png'
import SPIDERMAN from '../../assets/SPIDERMAN.png'


export default class CardsBoxs extends Component {
  render() {
    return (
      <div className='CardsBoxs'>
        <Card ImgName='CodeWar' srcImg={CodeWar} CardTitel="Join in the new DLC with Kratos to learn more about him and his future." HeaderName="CardOne"  />
        
        <Card ImgName='SUPERMAN' srcImg={SUPERMAN} CardTitel="Be part of the Suicide Squad and kill the Justice League!
-Amanda Waller" HeaderName="CardTow"  />
      
      <Card ImgName='SPIDERMAN' srcImg={SPIDERMAN} CardTitel="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks." HeaderName="CardThree"  />
        

      </div>
    )
  }
}
