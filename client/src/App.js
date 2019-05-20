import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Routes
import Routes from './routes';

// Components
import Nav from './components/Nav/Nav';
import Landing from './components/Landing';
import PrivateRoute from './components/secure/PrivateRoute';
import ProtectedHome from './components/secure/ProtectedHome';
import Login from './components/secure/Login';
import Logout from './components/secure/Logout';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: true,
      message: 'no user'
    }
  }
  render() {
    return (
      <div>
        <h1>cnstllnpdf</h1>
        <Nav routes={Routes} />
        <hr />
        <Switch>
          <Route path='/' component={Landing} exact/>
          <PrivateRoute 
            path='/private' 
            user={this.state.user} 
            component={ProtectedHome}
            />
          <Route path='/login' component={Login}/>
          <Route path='/logout' component={Logout}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
