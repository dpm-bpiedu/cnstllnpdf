import React from 'react';

const PageNotFound = ({ location }) => {
  return ( 
    <h1>Page not found: <code>{location.pathname}</code></h1>
   );
}
 
export default PageNotFound;