import './style.css'
import React, { Component } from 'react'
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).min(8).required(),
  
  });

class FromRightBlue extends Component {
    state = {
        email: '',
        password: '',
        errors: {} 
      };
      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      
      handleSubmit = e => {
        e.preventDefault();
    
        
        validationSchema
          .validate(this.state, { abortEarly: false })
          .then(() => {
      
          })
          .catch(err => {
            this.setState({
              errors: err.inner.reduce((errors, error) => {
                errors[error.path] = error.message;
                return errors;
              }, {})
            });
          });
      };
    
    render(){
        return (
            <div className='FromRightBlue'>
                <a className='back'  href="##">Back</a>
                <h1>Register Individual Account!</h1>
                <p className='content'>For the purpose of gamers regulation, your details are required.</p>
                <form onSubmit={this.handleSubmit}>
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
                    <label htmlFor="password">Repeat password*</label>
                    <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                    {this.state.errors.password && (
                    <p className="error">{this.state.errors.password}</p>
                    )}

                    <button className='submit' type="submit">Register Account</button>
                </form>
        
        
            </div>
          )

    }
  
}

export default FromRightBlue