import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state({
      email: '',
      password: ''
    });

   this.handleChange = this.handleChange.bind(this);

  } 

  handleChange(event) {
    const itemName = event.target.name;
    const itemValue = event.target.value;
    this.setState({
      [itemName]: itemValue
    })
  }

  render() {
    return (
      <form>
      <legend>Log In</legend>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input 
          className="form-control" 
          type="email"
          id="email"
          name="email" 
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          className="form-control" 
          type="password"
          id="password"
          name="password" 
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleChange}
        />
      </div>  
      <div className="form-group">
        <button type="submit" className="btn btn-secondary">submit</button>
        {1 && (
          <p className="mt-3">message</p>
        )}
      </div>          
    </form>
    );
  }


    
  
}

export default LoginForm;