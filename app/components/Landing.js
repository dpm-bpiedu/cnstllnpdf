import React from 'react';

function Landing(props) {
  console.log("landing, ", props);
  return (
    <main className='container mt-5'>
      <div className='jumbotron'>
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">App for sending html files to service that converts html files to pdf.</p>
      <hr className="my-4"/>

      <p className="lead">
        <a className="btn btn-secondary btn-lg" href="#" role="button">log in</a>
      </p>        
      </div>

    </main>
  );

}

export default Landing;