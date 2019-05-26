import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
    this.loginUser = this.loginUser.bind(this);
  }

  logoutUser = evt => {
    evt.preventDefault();
    this.setState({
      user: false,
      message: 'logged OUT',
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
          message: 'logged IN',
          userEmail: FBUser.email,
          userID: FBUser.id
        });
      } else {
        this.setState({
          user: false,
          message: 'logged OUT',
          userEmail: null,
          userID: null
        });
      }
    });
  }

  render() {

    return (
      <div>
        <h1>cnstllndpf </h1>
        
        {!this.state.user && (<button id="btnLogout" type="button" onClick={this.logoutUser}>log out</button>)}
       
        <h2>{this.state.message}</h2>
        <hr/>

        <Switch>
          
          <Route path='/' exact render={()=> {
            return (<Home login={this.loginUser}/>);
          }}/>
          <Route path='/instructions' component={Instructions}/>
          <Route path='/getpdf' exact component={GetPDF}/>
        </Switch>

      </div>
    );
  }
}

export default App;
