import React, { Component } from "react";
import Header from "./Header";

class Login extends Component {
  render() {
    console.log("Login: ", this.props);

    return (
      <React.Fragment>
        <Header />
        <main className="container mt-5">
          <form>
            <div className="row">
              <div className="col-12">
                <legend>Log In</legend>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="loginEmail">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="loginPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="loginPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p>
                  <small>error message</small>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-secondary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default Login;
