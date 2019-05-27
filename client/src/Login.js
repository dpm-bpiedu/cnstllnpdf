import React, { Component } from 'react';
import firebase from './config';
import { Link, Redirect, withRouter } from 'react';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
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

  handleSubmit(evt) {
    const loginInfo = {
     email: this.state.email, 
     password: this.state.password
    };
    evt.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(
        loginInfo.email,
        loginInfo.password
      )
      .then(()=> {
        this.setState({redirectToReferrer: true});
        //this.props.history.push('/private');
      })
      .catch(error => {
        if(error) {
          this.setState({errorMessage: error.message});
        } else {
          this.setState({errorMessage: null});
        }
      });
  }

  render() {

    const {match} = this.props;
    const  { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: {pathname: '/'} }


    console.log(match);
    console.log(this.props.history);
    console.log(this.props.location);

    if(redirectToReferrer === true) {
        //this.props.history.push('/private')
        return (
          <Redirect to={from}/>
        )
    }

    return (
      <div>
        <h2>Log in to view private page: {this.props.extra}</h2>
        <button onClick={this.login}>log in</button>

      </div>
    );
  }
}



export default Login;