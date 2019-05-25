import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import firebase, { UN, PWD } from './config';

// Components
import Home from './Home';
import Instructions from './Instructions';
import GetPDF from './GetPDf';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
      message: null,
      userID: null,
      userEmail: null,
      errorMessage: null
    }
  }

  logoutUser = evt => {
    evt.preventDefault();
    this.setState({
      user: false,
      message: 'user is NOT logged in',
      userID: null,
      userEmail: null
    });

    firebase.auth()
      .signOut()
      .then(() => {
        console.log('logged out');
      });

  }

  loginUser = evt => {
    evt.preventDefault();
    firebase.auth().signInWithEmailAndPassword(UN, PWD)
    .then(() => {
      console.log("logged in");
    })
    .catch(error => {
      if(error.message !== null) {
        this.setState({errorMessage: error.message});
      } else {
        this.setState({errorMessage: null});
      }
    })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser) {
        this.setState({
          user: true,
          message: 'user IS logged in',
          userEmail: FBUser.email,
          userID: FBUser.id
        });
      }
    });
  }

  render() {

    return (
      <div>
        <h1>cnstllndpf </h1>
        {!this.state.user && (<button id="btnLogin" type="button" onClick={this.loginUser}>log in</button>)}
        {this.state.user && (<button id="btnLogout" type="button" onClick={this.logoutUser}>log out</button>)}
       
        <h2>{this.state.message}</h2>
        <hr/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/instructions' component={Instructions}/>
          <Route path='/getpdf' exact component={GetPDF}/>
        </Switch>
      </div>
    );
  }
}

export default App;
