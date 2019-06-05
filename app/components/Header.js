import React from 'react';
import Logout from './Logout';

const isUser = (user) => {
  if(user) {
    return (<small className='log-status'> (logged IN)</small>)
  } else {
    return (<small className='log-status'> (logged OUT)</small>)
  }
}

function Header(props) {



  return (
    <header>
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <span className="navbar-text">
          <h1>Cnstllnpdf
          {props.user && (
            <Logout user={props.user}/>
          )}           
          </h1> 

        </span>
      </div>
    </nav>
  </header>
  );

}


export default Header;