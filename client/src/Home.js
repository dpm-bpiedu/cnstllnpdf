import React, { Component } from 'react';

const Home = (props) => {
  return (
    <div>
      <h2>Home Page</h2>
      <button id="btnLogin" onClick={props.login}>log in</button>
    </div>
  );
};


// class Home extends Component {
//   render() {
//     return (
//       <div>
//       <h2>Home Page</h2>
//       <button id="btnLogin" onClick={this.props.login}>log in</button>        
//       </div>
//     );
//   }
// }

export default Home;