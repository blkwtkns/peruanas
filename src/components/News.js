// ./src/components/News.js
import React, { Component } from 'react';
import './../styles/App.css';

// <img src={logo} className="News-logo" alt="logo" />


class News extends Component {
  render() {
    return (
      <div className="News">
        <div className="News-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="News-intro">
          To get started, edit <code>src/News.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default News;
