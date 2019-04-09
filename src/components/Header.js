import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="./index.html">
            {props.name} Hello, {props.user}
          </Link>
          <ul className="nav">
            {props.user == null && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    log in
                  </Link>
                </li> 
              </>
            )}
            {props.user && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/instructions">
                    instructions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/createpdf">
                    create pdf
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">
                    logout
                  </Link>
                </li>
              </>
            )}            
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
