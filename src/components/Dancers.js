// ./src/components/Dancers.js
import React, { Component } from 'react';
import './../styles/App.css';

// <img src={logo} className="Dancers-logo" alt="logo" />

class Dancers extends Component {
  render() {
    return (
      <div className="Dancers">
        <div className="Dancers-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="Dancers-intro">
          To get started, edit <code>src/Dancers.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Dancers;
