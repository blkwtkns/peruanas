import React from 'react';
import {
  renderToString,
  renderToStaticMarkup
} from 'react-dom/server';
import HTMLDocument, {
  doctype
} from './server/views/HTMLDocument'
import configureStore from './configureStore'
import {
  Provider
} from 'react-redux';
import {
  match,
  RouterContext
} from 'react-router';
import rootSaga from './sagas/rootSaga'
import routes from './routes';

function renderApplication(props) {
  return doctype + renderToStaticMarkup(<HTMLDocument { ...props} />);
}

export default (req, res) => {
  const store = configureStore();

  match({
    routes,
    location: req.url
  }, (error, redirect, props) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const rootComponent = (
        <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
      );

      if (process.env.NODE_ENV == 'development') {
        res.status(200).send(`
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Raices Peruanas - Peruvian Dance, Music, and Culture</title>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
            </head>
            <body>
                <div id='mount'></div>
                <script src='bundle.js'></script>
                <script src="https://use.fontawesome.com/e076ed21e5.js"></script>
            </body>
        </html>
    `);

      } else if (process.env.NODE_ENV == 'production') {

        store.runSaga(rootSaga).done.then(() => {
          const state = store.getState();
          const html = renderToString(rootComponent);

          res.status(200).send(renderApplication({
            state,
            html
          }));
        })

        renderToString(rootComponent)

        store.close();
      }
    } else {
      res.status(404).send('Not found');
    }
  });
};
