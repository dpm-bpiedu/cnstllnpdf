import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {

  const isAuthenticated = props.user

  return (
  
    <Route {...props}
           render={(props) => (
               isAuthenticated
                   ? <Component {...props}/>
                   : <Redirect to={
                       {
                           pathname: '/login',
                           state: { target: props.location }
                       }
                   } />
           )}
    />
  )
};

export default PrivateRoute;