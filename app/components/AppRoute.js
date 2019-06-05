import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const AppRoute = ({ component: Component, ...rest }) => {

  const { user } = rest;

  console.log('AppRoute, ', user);

  return (
    <Route {...rest} render={(props)=> (
      user === true
      ?
      <Component {...props}/>
      :
      <Redirect to='/login'/>
    )}/>
  );



}

export default AppRoute;