import './style.css'
import React, { Component } from 'react'

export default class GameHeader extends Component {
  state = {
    username: "",
  };
  componentDidMount() {
    const username = localStorage.getItem("name");
    this.setState({ username });
  }
  render() {
    return (
      <div className='GameHeader'>
        <div className='GameLogo'></div>
        <p className='Welcome'>Welcome back<br/>{this.state.username}</p>
      </div>
    )
  }
}
