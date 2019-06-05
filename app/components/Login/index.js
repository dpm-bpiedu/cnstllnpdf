import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';

// firebase
import fb from '../../fb/config';

let history,user;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      email: '',
      password: '',
      loading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  };

  handleChange(event) {
    const itemName = event.target.name;
    const itemValue = event.target.value;
    this.setState({
      [itemName]: itemValue
    })
  }

  onSuccess() {
    let count = 1
    function checkUser() {

      if(user) {
        history.push('/app');
        clearInterval(userTimer);
      } else if(!user && count < 10) {
        count++;
      } else if(count === 10) {
        this.setState({
          message: 'Something went wrong'
        })
        clearInterval(userTimer);
      }
    }

    let userTimer = setInterval(checkUser, 1000)

  }

  handleSubmit(event) {
    event.preventDefault();
      fb.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onSuccess)
        .then(this.setState({
          loading: true
        }))
        .catch(error => {
          if(error) {
            this.setState({ message: error.message });
          }       
        });
  }
 
  render() {
  
    history = this.props.history;
    user = this.props.user

    return (
      <div className='row'>
        <div className='col-6'><LoginHeader/></div>
        <div className='col-6'>
          <form onSubmit={this.handleSubmit}>
            {this.state.loading && (<div className="loading"><span>loading...</span></div>)}
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
              {this.state.message && (
                <p className="mt-3">{this.state.message}</p>
              )}
            </div>          
          </form>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
