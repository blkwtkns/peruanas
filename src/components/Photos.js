// ./src/components/Photos.js
import React, { Component } from 'react';
import logo from '../logo.svg';
import './../styles/App.css';


// <img src={logo} className="Photos-logo" alt="logo" />
class Photos extends Component {
  render() {
    return (
      <div className="Photos">
        <div className="Photos-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="Photos-intro">
          To get started, edit <code>src/Photos.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Photos;
