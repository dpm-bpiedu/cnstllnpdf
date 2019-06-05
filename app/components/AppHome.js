import React, { Component } from 'react';

class AppHome extends Component {
  render() {
    return (
      
        <form>
          <div className='row'>
            <div className='col-12'>
              <legend>Get PDF</legend>
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <div className='form-group'>
                <label htmlFor='pdfTitle'>PDF title</label>
                <input
                  type='text'
                  className='form-control'
                  id='loginEmail'
                  placeholder='title'
                />
              </div>
            </div>
            <div className='col-6'>
              <div className='form-group'>
                <label htmlFor='pdfPath'>path</label>
                <input
                  type='text'
                  className='form-control'
                  id='pdfPath'
                  placeholder='path'
                />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='form-check'>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id='checkFinal'
                />
                <label className='form-check-label' htmlFor='checkFinal'>
                  final
                </label>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <p>
                <small>error message</small>
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <button type='submit' className='btn btn-secondary'>
                Submit
              </button>
            </div>
          </div>
        </form>
    
    );
  }
}

export default AppHome;
