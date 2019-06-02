import React, { Component } from 'react';

class Login extends Component {
  render() {
    console.log("Login: ", this.props);
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Login;