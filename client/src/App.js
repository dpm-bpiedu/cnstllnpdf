import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import LogIn from "./components/LogIn";
import SecureOne from "./components/SecureOne";
import SecureTwo from "./components/SecureTwo"

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      message: 'no user',
      routes: [
        {name: 'log in', url: '/', exact: true},
        {name: 'secure one', url: '/secureone', exact: false},
        {name: 'secure two', url: '/securetwo', exact: true},
        {name: 'log out', url: '/logout', exact: true}        
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>cnstllnpdf</h1>
        <Nav routes={this.state.routes} />
        <hr />
        <Switch>
          <Route exact path='/' component={LogIn}/>
          <Route path='/secureone' component={SecureOne}/>
          <Route path='/securetwo' component={SecureTwo}/>
          <Route path='/logout' render={()=> {
            return <Redirect to='/' />
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
