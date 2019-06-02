import React, { Component } from 'react';

class Landing extends Component {
  componentDidMount() {
    this.props.onLoad('landing');
  }
  render() {
    return (
  <div className='jumbotron'>
      <h1 className='display-4'>{this.props.title}</h1>
      <p className='lead'>App for sending html files to service that converts html files to pdf.</p>
      <hr className='my-4'/>

      <p className='lead'>
        <a className='btn btn-secondary btn-lg' href='#' role='button'>log in</a>
      </p>        
      </div>
    );
  }
}

export default Landing;