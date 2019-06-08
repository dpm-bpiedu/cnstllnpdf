import React from 'react';
import fb from '../fb/config';
import { withRouter} from 'react-router-dom';

let history;

class Logout extends React.Component {

  handleLogout() {
    fb.auth()
      .signOut()
      .then(() => {history.push('/')})
  }


  render() {
    history = this.props.history;
    return (
      <button className="btn btn-link" onClick={this.handleLogout}>log out <small>{this.props.user}</small></button>
    );
  }
}

export default withRouter(Logout);