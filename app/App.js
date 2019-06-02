import React from 'react';

// Components
import Landing from './components/Landing';
import Login from './components/Login';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true
    }
  }
  render() {
    return (
      <React.Fragment>
        <Login
          title='log in page'
        />
      </React.Fragment>
    )
  }
}

export default App;