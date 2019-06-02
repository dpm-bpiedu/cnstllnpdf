import React from 'react';

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
        <Main view={this.state.view}>
        <Landing title='cnstllnpdf' onLoad={this.updateView}/>
        </Main>
        
      </React.Fragment>
    )
  }
}

export default App;