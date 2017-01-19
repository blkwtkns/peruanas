// ./src/components/History.js
import React, { Component } from 'react';
import './../styles/App.css';

// <img src={logo} className="History-logo" alt="logo" />

class History extends Component {
  render() {
    return (
      <div className="History">
        <div className="History-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="History-intro">
          To get started, edit <code>src/History.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default History;
