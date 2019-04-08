import React from 'react';

const Footer = props => {
  return (
    <footer>
    <p class="text-center"><small>&copy; 2019 {props.name}</small></p>
  </footer>
  );
};

export default Footer;