import React, { Component } from "react";

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loggedIn: false,
      appTitle: 'cnstllnpdf',
      user: 'Dan'
    }
    
  }
  
  render() {
    return (
      <>
      <Header name={this.state.appTitle} user={this.state.user}/>
      <Main name={this.state.appTitle}/>
      <Footer name={this.state.appTitle}/>
      </>
    );
  }
}

export default App;
