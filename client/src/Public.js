import React from 'react';
import { Link } from 'react-router-dom';

const Public = (props) => {
  return (
    <div>
      <h2>Public Page</h2>
      {!props.userStatus && (
        <p className='text-center'>
          <Link to='/login' className='loginLink'>log in</Link>
        </p>
      )}

    </div>
  );
};

export default Public;