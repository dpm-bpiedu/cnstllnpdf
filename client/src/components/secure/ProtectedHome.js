import React from 'react';

const ProtectedHome = (props) => {
  return (
    <div>
      <h1>Protected Home <small>{props.appMessage}</small></h1>
    </div>
  );
};

export default ProtectedHome;