import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react';


class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  login = () => {
    this.setState(() => ({
      redirectToReferrer: true
    }))
  }

  render() {

    const {match} = this.props;
    const  { redirectToReferrer } = this.state;
   // const { from } = this.props.location.state || { from: {pathname: '/'} }


    console.log(match);
    console.log(this.props.history);
    console.log(this.props.location);

    if(redirectToReferrer === true) {
        this.props.history.push('/')
    }

    return (
      <div>
        <h2>Log in to view private page at</h2>
        <button onClick={this.login}>log in</button>
        <ul>
          
          <li>{this.props.extra}</li>
          
        </ul>
      </div>
    );
  }
}



export default Login;