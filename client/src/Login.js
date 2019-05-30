import React, { Component } from 'react';
import firebase from './config';



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

        // const redirectToPrivate = () => {
        //   this.props.history.push('/private');
        // }

        setTimeout(this.props.history.push, 500, '/private');
        
        //this.setState({redirectToReferrer: true});
      })
      .catch(error => {
        if(error) {
          this.setState({formError: error.message});
        } else {
          return;
        }        
      });
  }

  

 
  render() {

    return (
      <>
        {this.props.user && (
          <h5>Loading ...</h5>
        )}

        {!this.props.user && (
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
        )}
         

        </>
    );
  }
}



export default Login;