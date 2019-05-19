import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

  const linksComponents = props.routes.map((link, index) => {
    return (
      <li key={index}><NavLink to={link.url} activeClassName={'activeNavLink'} exact={link.exact}>{link.name}</NavLink></li>
    )
  });

  return (
    <div>
      <nav>
        <ul>
          {linksComponents}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;