import React from 'react';

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
          Cnstllnpdf {isUser(props.user)}
        </span>
      </div>
    </nav>
  </header>
  );

}


export default Header;