import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  // componentDidMount() {
  //   this.props.onLoad('landing');
  // }
  render() {
    console.log('Landing props, ', this.props);
    return (
  <div className='jumbotron'>
      <h1 className='display-4'>{this.props.title}</h1>
      <p className='lead'>App for sending html files to service that converts html files to pdf.</p>
      <hr className='my-4'/>

      <p className='lead'>
        <Link className='btn btn-secondary btn-lg' to='/login' role='button'>log in</Link>
      </p>        
      </div>
    );
  }
}

export default Landing;