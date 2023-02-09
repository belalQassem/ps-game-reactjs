import './style.css'
import React, { Component } from 'react'

import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  { API_URL }  from '../../API'
import Img from '../../assets/Group 44.svg'
import dottedImg from '../../assets/Group.svg'
import circle from '../../assets/circle.svg'
import swal from "sweetalert";


const validationSchema = yup.object().shape({
    name:yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
  
  });

class SignUp extends Component {
    state = {
        name:'',
        email: '',
        password: '',
        passwordConfirm: '',
        Isloading: false,
        isAuthorized: false,
        errors: {} 
      };
      handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    
      
      
      
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(this.state, { abortEarly: false });
            if (this.state.password !== this.state.passwordConfirm) {
                this.setState({ errors: { password: "Passwords don't match" } });
                return;
            }
    
            const { data } = await axios.post( `${API_URL}/users/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            });
            console.log(data);
            this.setState({isAuthorized:true})
            swal({
              title: "Success!",
              text: "Registed Success",
              icon: "success",
              timer: 3000,
              button: true,
            });
        } catch (err) {
            if (err.inner) {
                this.setState({
                    errors: err.inner.reduce((errors, error) => {
                        errors[error.path] = error.message;
                        return errors;
                    }, {})
                });
            } else {
                console.log(err);
            }
        }
    }
    
    
    render(){
        return (
        <div className='SignUpPage'>
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
            <div className='FromRightBlue'>
                <div>
                    <Link to="/Sign-in">back</Link>
                </div>
                <h1>Register Individual Account!</h1>
                <p className='content'>For the purpose of gamers regulation, your details are required.</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">name*</label>
                    <input type="text" name="name" value={this.state.name}onChange={this.handleChange}
                    />
                    {this.state.errors.name && (
                    <p className="error">{this.state.errors.name}</p>
                    )}
                    <label htmlFor="email">Email address*</label>
                    <input type="email" name="email" value={this.state.email}onChange={this.handleChange}
                    />
                    {this.state.errors.email && (
                    <p className="error">{this.state.errors.email}</p>
                    )}


                    <label htmlFor="password">Create password*</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    {this.state.errors.password && (
                    <p className="error">{this.state.errors.password}</p>
                    )}

                    <label htmlFor="passwordConfirm">Repeat password*</label>
                    <input
                    type="password"
                    name="passwordConfirm"
                    value={this.state.passwordConfirm}
                    onChange={this.handleChange}
                    />
                    {this.state.errors.password && (
                    <p className="error">{this.state.errors.password}</p>
                    )}
                   <div className="input-box">
                        <input className='input'
                        onClick={this.handleSubmit}
                        type="submit"
                        value={
                            this.state.isloading ? "Loading ... " : "Register Account"}
                        />
                    </div>
                    <span>or</span>
                    <div className="input-box">
                    <Link to='/Sign-in'><button type='button'>
                            login
                        </button></Link>
                        
                        
                    </div>
                    
                </form>
        
        
            </div>  
        </div>
          )

    }
  
}

export default SignUp