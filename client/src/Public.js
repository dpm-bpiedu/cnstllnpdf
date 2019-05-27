import React from 'react';
import { Link } from 'react-router-dom';

const Public = (props) => {
  return (
    <div>
      <h2>Public Page</h2>
      {!props.user && (
        <p className='text-center'>
          <Link to='/login' className='loginLink'>log in</Link>
        </p>
      )}
      {props.user && (
        <p>you are logged in</p>
      )}

    </div>
  );
};

export default Public;