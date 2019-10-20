import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Login from './components/views/Login';
import Landing from './components/views/Landing';
import Print from './components/views/Print';
import PageNotFound from './components/views/PageNotFound';

import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/print" component={Print}/>
          <PrivateRoute
            exact
            path="/"
            component={Landing}
          />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </AuthProvider>

  );
}

export default App;
