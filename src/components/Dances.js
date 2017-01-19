// ./src/components/Dances.js
import React, { Component } from 'react';
import './../styles/App.css';

// <img src={logo} className="Dances-logo" alt="logo" />

class Dances extends Component {
  render() {
    return (
      <div className="Dances">
        <div className="Dances-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="Dances-intro">
          To get started, edit <code>src/Dances.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Dances;
