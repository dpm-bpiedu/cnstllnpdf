import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {

  const currentUser = '5';  

  return (
  
    <Route {...rest}
           render={(props) => {
             if(currentUser === '5') {
               return (<Component {...props}/>)
             } else {
               return (<Redirect to='/login'/>)
             }
           }}
    />
  )
};

export default PrivateRoute;