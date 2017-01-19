// ./src/components/History.js
import React, { Component } from 'react';
import logo from '../logo.svg';
import './../styles/App.css';


class History extends Component {
  render() {
    return (
      <div className="History">
        <div className="History-header">
          <img src={logo} className="History-logo" alt="logo" />
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
