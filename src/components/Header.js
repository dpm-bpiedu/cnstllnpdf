import React from 'react';

const Header = props => {
  return (
    <header>
    <nav className="navbar navbar-light bg-light">
      <div className="container">
          <a className="navbar-brand" href="./index.html">{props.name}</a>
          <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="./pages/work.html">instructions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/about.html">create pdf</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pages/contact.html">get pdf</a>
              </li>
            </ul> 
      </div>     
    </nav>
  </header>
  );
};

export default Header;