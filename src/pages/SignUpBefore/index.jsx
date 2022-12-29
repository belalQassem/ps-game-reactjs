import './style.css'
import React, { Component } from 'react'
import SideLeft from '../../components/SideLeft'
import Lay from '../../components/Lay'

import SideLeftBlue from '../../components/SideLeftBlue'
import FromRightBlue from '../../components/FromRightBlue'




export default class SignUpBefore extends Component {
  render() {
    return (
      <div className='SignUpBefore'>
        <SideLeftBlue/>
        <FromRightBlue/>

            {/* <LoginForm/> */}
            {/* <Lay> */}
              
            {/* <SideLeft/> */}
            {/* </Lay> */}
            
      </div>
    )
  }
}
