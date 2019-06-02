import React from 'react';
import { withRouter } from 'react-router-dom'

const Main = ({ view, children, match }) => {
  const mainId = `view_${view}`;
  console.log(match);
  return (
    <main className='container mt-5' id={mainId}>
      {children}
    </main>
  );
};

export default withRouter(Main);