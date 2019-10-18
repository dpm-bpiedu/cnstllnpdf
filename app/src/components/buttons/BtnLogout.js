import React from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../firebase/initialize';


const LogoutBtn = withRouter(({ history }) => {
  return (
    <button 
    id="btn-logout"
    title="lout out of application"
    onClick={() =>{
      app.auth()
      .signOut()
      .then(() => history.push("/login"));
    }}>log out <i className="fal fa-sign-in-alt"></i></button>
  );
});

export default LogoutBtn;