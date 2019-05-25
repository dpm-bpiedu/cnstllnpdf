import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import firebase from './services/Firebase';

// Routes
import Routes from './routes';

// Components
import Nav from './components/Nav/Nav';
import Landing from './components/Landing';
import PrivateRoute from './components/secure/PrivateRoute';
import ProtectedHome from './components/secure/ProtectedHome';
import Login from './components/secure/Login';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
      message: 'app message',
      userID: null,
      userEmail: null
    }
  }

  logoutUser = evt => {
    evt.preventDefault();
    this.setState({
      user: false,
      userID: null,
      userEmail: null
    });

    firebase.auth()
    .signOut()
    .then(()=> {
      const { target } = this.props.location || {target: {pathname: '/login'}}
      return (<Redirect to={target}/>);
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: true,
          userEmail: FBUser.email,
          userID: FBUser.uid
        });
      }
    });
  }


  render() {

    return (
      <div>
        <h1>cnstllnpdf <button onClick={this.logoutUser}>log out</button></h1>
          <div className="log-status">
         {this.state.user ?
         (<small>{this.state.userEmail} is logged in</small>)
         :
         (<small>logged out</small>)
         } 
        </div>
        <Nav routes={Routes} />
        <hr />
        <Switch>
          <Route path='/' component={Landing} exact/>
          <PrivateRoute component={ProtectedHome}/>
          <Route path='/login' component={Login}/>         
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
