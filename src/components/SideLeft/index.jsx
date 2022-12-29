import React from 'react'
import './style.css'
import Img from '../../assets/Group 4.svg'


const SideLeft = ()=> {

    return (
      <div className='SideLeft'>
        
        <img src={Img} alt="logo" />
        <p className='comaa'>“</p>
        <p className='content'>I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.</p>
        <p className='bottom'>Hideo Kojima</p>
        <div className='Joystick'></div>
      </div>
    
    )
      
}
export default SideLeft