import React from 'react';
import firebase from './config';
import { 
  Route, 
  Redirect, 
  Link,
  withRouter,
  Switch
 } from 'react-router-dom';

 // components

 import Public from './Public';
 import Private from './Private';
 import Login from './Login';
 import PageNotFound from './PageNotFound';

 import Nav from './Nav';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      userID: null,
      userEmail: null,
      message: 'test message',
      errorMsg: null
    }
    this.logOutUser = this.logOutUser.bind(this);
  }

  logOutUser = (evt, history) => {
    evt.preventDefault();
    this.setState({
      user: null,
      userEmail: null,
      userId: null,
      message: null
    });
    // firebase
    //   .auth()
    //   .signOut()
    //   .then(() => {
    //     history.pushState('/')
    //   });
    console.log('logged out');
    history.push('/');
  };

  render() {
 
      return (
        <>
        <header>
          <h1>cnstllndpf</h1>
          {this.state.user && (
            <Nav 
            user={this.state.user}
            logout={this.logOutUser}
            />
          )}
          
        </header>
        <main>
          <hr/>

          
        </main>

        <Switch>
          <Route exact path='/' render={() => {
            return (
              <Public user={this.state.user}/>
            )
          }}/>
          <Route path='/private' component={Private}/>
          <Route path='/login' render={(props)=> {
            return (
              <Login {...props} extra='Boo!'/>
            )
          }}/>
          <Route component={PageNotFound}/>

        </Switch>
       
        </>

    );
  }
}

export default App;
