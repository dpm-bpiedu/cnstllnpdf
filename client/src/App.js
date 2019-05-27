import React from 'react';
import firebase, { UN, PWD} from './config';
import { 
  Route, 
  Redirect, 
  Link,
  withRouter
 } from 'react-router-dom';

//  const testLog = () => {
//    firebase.auth().onAuthStateChanged(function(user))
//  }

const testAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signOut(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const Public = () => <h3>Public</h3>;
const Private = (props) => {
  console.log(props.message);
  return (
  <h3>Private {props.message}</h3>
  
  )};

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    testAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })

  }
  render() {

    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: {pathname: '/'}};

    if(redirectToReferrer === true) {
      return (
        <Redirect to={from}/>
      )
    }

    return (
      <div>
        <p>you must log in to view this page at {from.pathname}</p>
        <button onClick={this.login}>log in</button>
        </div>
    )
  }
}





const PrivateRoute = ({ component: Component, ...rest}) => {
  const currentExtra = rest.extra;
  const currentMsg = rest.msg;
  console.log(currentExtra);
  return (
    <Route {...rest} render={(props) => (
     
      //testAuth.isAuthenticated === true
      currentExtra === true
      
      
     
      ? <Component message={currentMsg} {...props}/>
      :
      <Redirect to={{
        pathname: '/login',
        state: {
          from: props.location
        }
      }}/>
    )}/>
  )}


const AuthButton = withRouter((props,{ history }) => (
  //testAuth.isAuthenticated === true
  props.user === true
  ?
  <p>Welcome! <button onClick={() => {
    testAuth.signOut(() => history.push('/'))
  }}>Sign Out</button></p>
  :
  <p>You are not logged in.</p>
))

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: true,
      message: 'test message'
    }
  }

  render() {


      return (
      <div>
        <AuthButton/>
        <ul>
          <li><Link to='/'>Public Page</Link></li>
          <li><Link to='/private'>Private Page</Link></li>
        </ul>
        <hr/>
        <h1>cnstllndpf </h1>

        <Route exact path='/' component={Public}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute path='/private' component={Private} msg={this.state.message} extra={this.state.user}/>
          
      </div>
    );
  }
}

export default App;
