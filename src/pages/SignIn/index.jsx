import React, { Component } from 'react' 
import SideLeft from '../../components/SideLeft'

import './style.css'
import google from '../../assets/google.svg'
import twitter from '../../assets/twitter.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import show from '../../assets/show.svg'
import * as Yup from 'yup';
import axios from 'axios';
import { API_URL } from '../../API'
import { Link } from 'react-router-dom'


class SignIn extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
    Isloading: false,
    isAuthorized: false,
    errors: {}
  };
  validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  toggleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ Isloading: true });
    this.validationSchema
      .validate(this.state, { abortEarly: false })
      .then(async () => {
          const res = await axios.post(
            `${API_URL}/users/login`,
            {
              email: this.state.email,
              password: this.state.password,
            }
          );
          if (res) {
            this.setState({ Isloading: false });
  
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name", res.data.name);
            localStorage.setItem("admin", res.data.isAdmin ? "true" : "false");
            if (res.data.isAdmin) this.props.admin();
            this.props.login();
            console.log(res);
          }
      })
      .catch(errors => {
        const errorsObject = errors.inner.reduce((acc, error) => {
          acc[error.path] = error.message;
          return acc;
        }, {});
        this.setState({ errors: errorsObject });
      });
  }

  render() {
    return (
      <div className="SignUpAfter">
        <SideLeft />
        <div className='SideRight'>
          <h1>Join the game!</h1>
          <p className='go'>Go inside the best gamers social network!</p>
          
              <div className='links'>
                  <a href="https://www.google.com/"><img src={google} alt="google" /></a>
                  <a href="https://twitter.com/"><img src={twitter} alt="twitter" /></a>
                  <a href="https://www.linkedin.com/"><img src={linkedin} alt="linkedin" /></a>
                  <a href="https://www.github.com/"><img src={github} alt="github" /></a>
              </div>
              <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Your email</label>
          <input
            placeholder="Write your email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          {this.state.errors.email ? (
            <div className='errors'>{this.state.errors.email}</div>
          ) : null}

          <label htmlFor="password">Enter your password</label>
          <input
            placeholder="Write your password"
            type={this.state.showPassword ? 'text' : 'password'}
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          {this.state.errors.password ? (
            <div className='errors'>{this.state.errors.password}</div>
          ) : null}
          <img src={show} alt='show' onClick={this.toggleShowPassword}/>
          
                        <div>
                        
                              <input type="submit"/>
                        
                      </div>
          <Link to='/Sign-Up'>Register</Link>
        </form>
      </div>
    </div>
  )
 }
}
export default SignIn;

