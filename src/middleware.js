import React from 'react';
import {
  renderToString,
  renderToStaticMarkup
} from 'react-dom/server';
import HTMLDocument, {
  doctype
} from './server/views/HTMLDocument'
import DevHTML from './server/views/DevHTML'
import configureStore from './configureStore'
import {
  Provider
} from 'react-redux';
import {
  match,
  RouterContext,
  createMemoryHistory
} from 'react-router';
import rootSaga from './sagas/rootSaga'
import routes from './routes';

function renderApplication(props) {
  return doctype + renderToStaticMarkup(<HTMLDocument { ...props} />);
}

const renderDevHTML = (props) => {
  return doctype + renderToStaticMarkup(<DevHTML {...props} />);
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
        <Provider store={store} key="provider">
            <RouterContext {...props}/>
          </Provider>
      );

      store.runSaga(rootSaga).done.then(() => {
        const state = store.getState();
        /* console.log('runSaga on middleware', state) */

        if (process.env.NODE_ENV == 'development') {

          res.status(200).send(renderDevHTML({
            state
          }));

        } else if (process.env.NODE_ENV == 'production') {

          const html = renderToString(rootComponent);
          res.status(200).send(renderApplication({
            state,
            html
          }));

        }

      })

      renderToString(rootComponent)
      store.close();

    } else {
      res.status(404).send('Not found');
    }
  });
};
