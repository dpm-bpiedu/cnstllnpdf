import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// firebase
import fb from './fb/config';

// Views
import Login from './components/Login/index';
import AppHome from './components/AppHome';

// Components
import Header from './components/Header';
import Main from './components/Main';
import AppRoute from './components/AppRoute';
import { UserProvider } from './contexts/user';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userEmail: null,
      userID: null,
      errorMessage: null,
      view: 'home'
    }
    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    fb.auth().onAuthStateChanged((FBuser) => {
      if(FBuser) {
        this.setState({
          user: true,
          userEmail: FBuser.email,
          userID: FBuser.uid,
          errorMessage: null
        });
        console.log("logged in");
        
      } else {
        this.setState({
          user: null,
          userEmail: null,
          userID: null,
          errorMessage: null
        });
      }
    })
  }

  updateView(newView) {
    this.setState({
      view: newView
    })
  }

  render() {
   
    return (
      <React.Fragment>
        <Header user={this.state.user}/>

        <Main>
          <Switch>
              <Route exact path='/' render={() => (
                <Redirect to='/login'/>
              )}/>
              <Route path='/login' render={() => (
                <Login user={this.state.user}/>
              )}/>
              <AppRoute path='/app' user={this.state.user} component={AppHome}/>
            </Switch>
        </Main>
      </React.Fragment>
    )
  }
}

export default App;