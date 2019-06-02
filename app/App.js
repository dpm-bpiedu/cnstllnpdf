import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

// Views
import Landing from './components/Landing';
import Login from './components/Login';
import Getpdf from './components/Getpdf';

// Components
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
      view: 'home'
    }
    this.updateView = this.updateView.bind(this);
  }

  updateView(newView) {
    this.setState({
      view: newView
    })
  }

  render() {

    return (
      <React.Fragment>
        <Header/>

        <Main>
          <Switch>
              <Route exact path='/' component={Landing}/>
              <Route path='/login' component={Login}/>
              <Route path='/getpdf' component={Getpdf}/>
            </Switch>
        </Main>

      </React.Fragment>
    )
  }
}

export default App;