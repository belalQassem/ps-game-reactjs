import React, { Component } from 'react'
import './style.css'
import google from '../../../assets/google.svg'
import twitter from '../../../assets/twitter.svg'
import linkedin from '../../../assets/linkedin.svg'
import github from '../../../assets/github.svg'
import show from '../../../assets/show.svg'


class SideRight extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  handleSubmit = event => {
    event.preventDefault();
    // process the form submission here
  };
  render() {
  return (
    <div className='SideRight'>
        <h1>Join the game!</h1>
        <p className='go'>Go inside the best gamers social network!</p>
        
            <div className='links'>
                <a href="https://www.google.com/"><img src={google} alt="google" /></a>
                <a href="https://twitter.com/"><img src={twitter} alt={twitter} /></a>
                <a href="https://www.linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
                <a href="https://www.github.com/"><img src={github} alt="github" /></a>
            </div>
            <form onSubmit={this.handleSubmit}>
        <label htmlFor="email">Your email</label>
        <input placeholder='Write your email' type="email" name="email" value={this.state.email} required onChange={this.handleChange}
        />

        <label htmlFor="password">Enter your password</label>
        <input type={this.state.showPassword ? 'text' : 'password'}
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          required
          
        />
        <img src={show} alt='show' onClick={this.toggleShowPassword}/>
        
          

        <button type="submit">Log In</button>
      </form>
      <p className='haveAccount'>Don’t have an account? <a href="https://www.github.com/">Register</a> </p>
    
        
    </div>
    
  )
  }
}

export default SideRight