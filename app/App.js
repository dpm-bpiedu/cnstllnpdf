import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

// firebase
import fb from './fb/config';

// Views
import Landing from './components/Landing';
import Login from './components/Login/index';
import AppHome from './components/AppHome';

// Components
import Header from './components/Header';
import Main from './components/Main';

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
      } else {
        this.setState({
          user: false,
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

    const user = (this.state.user === true);

    return (
      <React.Fragment>
        <Header user={user}/>

        <Main>
          <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/app' component={AppHome}/>
            </Switch>
        </Main>

      </React.Fragment>
    )
  }
}

export default App;