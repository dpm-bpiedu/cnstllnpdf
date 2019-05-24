import React from 'react';

const LogIn = () => {
  return (
    <div>
      <h1>Log in Page</h1>
      <form id="form-login">
      <input type="email" id="email-login" placeholder="email"/>
      <input type="password" id="pwd-login" placeholder="password"/>
      <button type="submit">submit</button>

      </form>
    </div>
  );
};

export default LogIn;