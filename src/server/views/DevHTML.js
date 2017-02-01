import React from 'react';
import { Component, PropTypes } from 'react';

export const doctype = '<!doctype html>';

export default class Raices extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Raices Peruanas - Peruvian Dance, Music, and Culture</title>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        </head>
        <body>
          <div id="mount"></div> 
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.state)};`}} />

          <script src='bundle.js'></script>
          <script src="https://use.fontawesome.com/e076ed21e5.js"></script>
        </body>
      </html>
    );
  }
}
