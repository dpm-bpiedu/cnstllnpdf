import React from 'react';

const PageNotFound = ({ location }) => {
  return (
    <div>
      <h2>Page Not Found for <code>{location.pathname}</code></h2>
    </div>
  );
};

export default PageNotFound;