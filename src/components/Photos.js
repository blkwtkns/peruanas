import React, { Component } from 'react';
import logo from '../logo.svg';
import './../styles/App.css';


class Photos extends Component {
  render() {
    return (
      <div className="Photos">
        <div className="Photos-header">
          <img src={logo} className="Photos-logo" alt="logo" />
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
