import React from 'react';

const Main = props => {
  return (
    <main>
    <div className="jumbotron">
      <div className="container"><h1>{props.name}</h1></div>
    </div>
    </main>
  );
};

export default Main;