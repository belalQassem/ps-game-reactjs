import './style.css'
import React, { Component } from 'react'
import GameHeader from '../../components/GameHeader'

import Item from '../../components/Item'
import Like from '../../assets/like.png'
import Setting from '../../assets/Settings.png'
import Puzzle from '../../assets/Puzzle.png'
import Plus from '../../assets/Plus.png'
import LightTheme from '../../components/LightTheme'
import CardsBoxs from '../../components/CardsBoxs'
import FRIENDS from  '../../assets/FRIENDS.png'
import Played from '../../components/Played'
import CodeWarLogo from '../../assets/lastPlayed/CodeWarLogo.png'
import GodOfWar from '../../assets/lastPlayed/GodOfWar.png'
import Crash from '../../assets/lastPlayed/Crash.png'
import Dying from '../../assets/lastPlayed/Dying.png'
import Most from '../../components/Most'






export default class GameDay extends Component {
  render() {
    return (
      <div className='GameDay'>
        <h1>NEW GAMES</h1>
        <GameHeader/>
        <hr />
        <Item ImgName="Plus"  srcImg={Plus} title='Plus'  />
        <Item ImgName="Like"  srcImg={Like} title='Like'  />
        <Item ImgName="Setting"  srcImg={Setting} title='Setting'  />
        <Item ImgName="Puzzle"  srcImg={Puzzle} title='Puzzle'  />
        <LightTheme/>
        <CardsBoxs/>
        <h2 className='lastP'>last played</h2>
        <Played Src={CodeWarLogo} title="CodeWarLogo" content="Hogwarts Legacy 50%"/>
        <Played Src={GodOfWar} title="GodOfWar" content="God Of War: Ragnarök 72.5%
"/>
        <Played Src={Crash} title="Crash" content="Crash Bandicoot N. Sane Trilogy"/>
        <Played Src={Dying} title="Dying" content="Dying Light 2 Stay Human 100%"/>
        <Most/>
        
        <h2 className='mmost'>most recent trophy</h2>
        <img className='FRIENDS' src={FRIENDS} alt="FRIENDS" />

        
        

      </div>
    )
  }
}
