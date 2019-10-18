import React, { useCallback, useContext, useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import firebase from '../../firebase/initialize';
import { AuthContext } from '../../contexts/AuthContext';

const FormLogin = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        history.push("/");
      } catch (error) {
        console.warn(error.message);
        setMessage(error.message);
      }
    }, [history, email, password]
  );  

  if (currentUser) {
    return <Redirect to="/" />;
  }  
  return (
    <form id="form-login" onSubmit={handleLogin}>      
      
          <legend>
          <legend>cnstllnpdf | log in<br/>{message}</legend>
          </legend>
          <label>
            email
            <br />
            <input
              name="email"
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            /><br/>
          </label>
          <label>
            password
            <br />
            <input
              name="password"
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </label><br/>
          
          <button type="submit">
            log in
          </button>
    </form>
  );
};

export default withRouter(FormLogin);