import React, { Component } from "react";
import firebase from 'firebase';
import { withRouter } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      errorMessage: 'no error',
      user: props.user
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const itemName = evt.target.name;
    const itemValue = evt.target.value;

    this.setState({
      [itemName]: itemValue
    });
  }

  handleSubmit(evt) {
    let loginInfo = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    evt.preventDefault();

    firebase.auth().signInWithEmailAndPassword(
      loginInfo.email,
      loginInfo.password
      ).then(() => {
          console.log('logged in');
      }
      ).catch(error => {
        if(error.message !== null) {
          this.setState({errorMessage: error.message});
        } else {
          this.setState({errorMessage: null});
        }
      });

  }

  render() {

    return (
      
      <form
      onSubmit={this.handleSubmit}
      >
        <legend>Log in {this.state.user}</legend>
        <br/>
        {this.state.errorMessage !==null ? (<div>{this.state.errorMessage}</div>) : null}
        <label htmlFor="loginEmail">email</label>{' '}
        <input 
          id="loginEmail" 
          type="email" 
          name="loginEmail" 
          placeholder="email"
          required
          value={this.state.loginEmail}
          onChange={this.handleChange}
        />
        <br/>
        <br/>
        <label htmlFor="loginPassword">password</label>{' '}
        <input 
          id="loginPassword" 
          type="password" 
          name="loginPassword" 
          placeholder="password"
          required
          value={this.state.loginPassword}
          onChange={this.handleChange}
        />
        <br/>
        <button type="submit">submit</button>
      </form>
    );
  }
}



export default withRouter(Login);
