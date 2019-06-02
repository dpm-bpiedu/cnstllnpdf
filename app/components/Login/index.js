import React, { Component } from 'react';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import { withRouter } from 'react-router-dom';

// firebase
import fb from '../../fb/config';

let history, msg;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'no message'
    }
  };

  handleLogin() {
   
    
      fb.auth()
        .signInWithEmailAndPassword('daniel.moneypenny@zovio.com', '123456')
        .then(() => {history.push('/getpdf')})
        .catch(error => {
          if(error.message !==null) {
            this.setState({ message: error.message });
          }
          console.log(error.message);
        });
      

  }
 
  handleLogout() {
    fb.auth().signOut().then(() => {console.log('logged out')});
  }
  render() {

    console.log(this.state.message);
    
    history = this.props.history;

    return (
      <div className='row'>
        <div className='col-6'><LoginHeader/></div>
        <div className='col-6'>
          <LoginForm/>
          <button onClick={this.handleLogin}>log in</button>
          <button onClick={this.handleLogout}>log out</button>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
