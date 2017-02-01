import { Component, PropTypes } from 'react';

export const doctype = '<!doctype html>';

export default class Raices extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    html: PropTypes.string.isRequired
  }

  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="57x57" href="%PUBLIC_URL%/favicon.ico/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="%PUBLIC_URL%/favicon.ico/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="%PUBLIC_URL%/favicon.ico/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="%PUBLIC_URL%/favicon.ico/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="%PUBLIC_URL%/favicon.ico/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="%PUBLIC_URL%/favicon.ico/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="%PUBLIC_URL%/favicon.ico/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="%PUBLIC_URL%/favicon.ico/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/favicon.ico/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="%PUBLIC_URL%/favicon.ico/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon.ico/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="%PUBLIC_URL%/favicon.ico/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon.ico/favicon-16x16.png"/>
          <link rel="manifest" href="%PUBLIC_URL%/favicon.ico/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="%PUBLIC_URL%/favicon.ico/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>

          <title>Raices Peruanas - Peruvian Dance, Music, and Culture</title>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>

          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
          <link rel='stylesheet' href='bundle.css'/>
        </head>
        <body>
          <div id="mount" dangerouslySetInnerHTML={{__html: this.props.html}} />
          <script dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${JSON.stringify(this.props.state)};`}} />


          <script src='bundle.js'></script>
          <script src="https://use.fontawesome.com/e076ed21e5.js"></script>
        </body>
      </html>
    );
  }
}