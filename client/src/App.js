import React, { Component } from "react";
import firebase from "./config";
import { Route, Switch } from 'react-router-dom';

import Public from "./Public";
import PrivateRoute from "./PrivateRoute";
import Private from "./Private";
import Login from "./Login";
import PageNotFound from "./PageNotFound";

import Nav from "./Nav";

class App extends Component {
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
      if (FBUser) {
        this.setState({
          user: true,
          userEmail: FBUser.email,
          userID: FBUser.uid,
          message: "user logged IN"
        });
        console.log("Auth State Changed: logged IN");
      } else {
        this.setState({
          user: null,
          userEmail: null,
          userID: null,
          message: "user logged OUT"
        });
        console.log("Auth State Changed: logged OUT");
      }
    });
  }

  render() {
    return (
      <>
        <header>
          <h1>cnstllndpf</h1>
          <h5>{this.state.message}</h5>
          {this.state.user && (
            <Nav user={this.state.user} logout={this.logOutUser} />
          )}
        </header>
        <main>
          <hr />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Public user={this.state.user} />;
              }}
            />
            <Route
              path="/login"
              render={props => {
                return <Login {...props} user={this.state.user} extra="Boo!" />;
              }}
            />
            <PrivateRoute
              path="/private"
              component={Private}
              user={this.state.user}
            />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
