import './style.css'
import React from 'react'
import Img from '../../assets/Group 44.svg'
import dottedImg from '../../assets/Group.svg'
import circle from '../../assets/circle.svg'

function SideLeftBlue() {
  return (
    <div className='lay'>
        <div className='SideLeftBlue'>
        
        <img className='img' src={Img} alt="img" />
        <img  className='dottedImg' src={dottedImg} alt="dottedImg" />
        <p className='comaa'>“</p>
        <p className='content'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
        <p className='bottom'>Hideo Kojima</p>
        <div className='Joystick'></div>
        <img  className='circle' src={circle} alt="circle" />
      </div>

    </div>
    
  )
}

export default SideLeftBlue