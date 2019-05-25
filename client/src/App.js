import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


// Routes
import Routes from './routes';

// Components



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
      message: 'app message',
      userID: null,
      userEmail: null
    }
  }

  render() {

    return (
      <div>
        <h1>cnstllndpf</h1>
      </div>
    );
  }
}

export default App;
