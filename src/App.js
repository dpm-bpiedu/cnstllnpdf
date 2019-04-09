import React, { Component } from "react";
import { Router } from "@reach/router";
import firebase from './Firebase';

import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loggedIn: false,
      appTitle: "cnstllnpdf",
      user: null
    };
  }

  componentDidMount() {
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let FBUser = snapshot.val();
      this.setState({user: FBUser});
    })
  }

  render() {
    return (
      <>
        <Header name={this.state.appTitle} user={this.state.user} />
        <Router>
          <Main path="/" name={this.state.appTitle} />
          <Login path="/login"/>
        </Router>
        <Footer name={this.state.appTitle} />
      </>
    );
  }
}

export default App;
