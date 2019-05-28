import React from 'react';
import { 
  Link,
  withRouter
 } from 'react-router-dom';

const Nav = (props, { history }) => {
  const user = props.user;
  return (
    <div>
      <ul>
        <li><Link to='/'>Public</Link></li>
        <li><Link to='private'>Private</Link></li>
        {user && (
          <li><Link to='/login' onClick={(evt)=> {props.logout(evt,props.history)}}>log out</Link></li>
        )}
        
      </ul>
    </div>
  );
};

export default withRouter(Nav);;