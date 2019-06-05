import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state({
      email: '',
      password: ''
    });
  }



  render() {
    return (
      <form>
        <legend>Log In</legend>
        <div className="form-group">
            <label htmlFor="email">Email address</label>

        </div>
        
      </form>
    );
  }
}

export default LoginForm;