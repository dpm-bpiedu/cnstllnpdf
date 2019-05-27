import React, { Component } from 'react';
import firebase from './config';
import { Redirect } from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formError: '',
      redirectToReferrer: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const itemName = evt.target.name;
    const itemValue = evt.target.value;

    this.setState({ [itemName]: itemValue} );
  }

  handleSubmit(e) {
    const logInfo = {
      email: this.state.email,
      password: this.state.password
    };
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        logInfo.email,
        logInfo.password
      )
      .then(() => {
        console.log('handlSubmit');
        this.props.history.push('/private');
        //this.setState({redirectToReferrer: true});
      })
      .catch(error => {
        this.setState({formError: error.message});
      });
  }

  render() {

    // const { redirectToReferrer } = this.state;
    // const { from } = this.props.location.state || { from: {pathname: '/'} }


    // if(redirectToReferrer === true) {
    //   // this.props.history.push('/private')
    //   // return (
    //   //   <Redirect to='/private'/>
    //   // )
    // }
  
    return (
      <>
        {this.props.user && (
          <p>you are logged in</p>
        )}

    
            
               
      
        <form id='login-form' onSubmit={this.handleSubmit}>
          <legend>Log in to site</legend>
          <label htmlFor='email'>email</label>
          <input 
            required
            type='email' 
            id='email' 
            name='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label htmlFor='password'>password</label>
          <input 
            required
            type='password' 
            id='password'
            name='password' 
            placeholder='password' 
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type='submit'>log in</button>
          {this.state.formError && (
          <p>{this.state.formError}</p>
        )}
        </form>
        </>
    );
  }
}



export default Login;