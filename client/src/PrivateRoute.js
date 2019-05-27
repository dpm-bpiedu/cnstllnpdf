import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
  console.log("PrivateRoute, ", rest.user);
  return (
    <Route {...rest} render={(props) => (
     
      //testAuth.isAuthenticated === true
      rest.user === true
     ? <Component {...props}/>
      :
      <Redirect to={{
        pathname: '/login',
        state: {
          from: props.location
        }
      }}/>
    )}/>
  )}

export default PrivateRoute;