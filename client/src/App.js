import React from "react";
import firebase from "./config";
import { Route, Switch } from "react-router-dom";

// components

import Public from "./Public";
import Private from "./Private";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

import Nav from "./Nav";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userID: null,
      userEmail: null,
      message: null,
      errorMsg: null
    };
    this.logOutUser = this.logOutUser.bind(this);
  }

  logOutUser = (evt, history) => {
    evt.preventDefault();

    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
        console.log("LogOutUser: logged out");
      });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(FBUser => {
      if(FBUser) {
        this.setState({
          user: true,
          userEmail: FBUser.email,
          userId: FBUser.uid,
          message: 'user logged in'
        });
        console.log('Auth State Changed: logged IN');
      } else {
        this.setState({
          user: null,
          userEmail: null,
          userId: null,
          message: 'user logged out'          
        });
        console.log('Auth State Changed: logged OUT');
      }

    });
  }

  render() {
    return (
      <>
        <header>
          <h1>cnstllndpf</h1>
          {this.state.user && (
            <Nav user={this.state.user} logout={this.logOutUser} />
          )}
        </header>
        <main>
          <hr />
        </main>

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Public user={this.state.user} />;
            }}
          />
          <Route path="/private" component={Private} />
          <Route
            path="/login"
            render={props => {
              return <Login {...props} extra="Boo!" />;
            }}
          />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
