import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest}) => {
  //<Component {...props} user={rest.user} logut={rest.logut}/>
  console.log("private route");
  return (
    <Route {...rest} render={(props, history) => (
     
      rest.user === true
     ? <Component {...props} {...rest}/>
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