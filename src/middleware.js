import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import { port } from '../config/env'
import React from 'react';
import ReactDOM from 'react-dom/server';
/* import {
 *   renderToString,
 *   renderToStaticMarkup
 * } from 'react-dom/server'; */
/* import HTMLDocument, {
 *   doctype
 * } from './layouts/HTMLDocument'
 * import DevHTML from './layouts/DevHTML' */
import TestHTML from './layouts/testHTML';
import { configureStore } from './configureStore'
import {
  Provider
} from 'react-redux';
import {
  match,
  RouterContext,
} from 'react-router';
import createHistory from 'react-router/lib/createMemoryHistory';
import { syncHistoryWithStore } from 'react-router-redux';
import rootSaga from './sagas/rootSaga'
import routes from './routes';

const app = express();
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico', 'favicon.ico')));

app.use('/', express.static(path.resolve(__dirname, '../public')));



/* const renderApplication = (props) => {
 *   return doctype + renderToStaticMarkup(<HTMLDocument { ...props} />);
 * }
 * 
 * const renderDevHTML = (props) => {
 *   return doctype + renderToStaticMarkup(<DevHTML {...props} />);
 * } */

/* export default (req, res) => { */
app.use( (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    webpackIsomorphicTools.refresh();
  }

  const memoryHistory = createHistory(req.originalUrl);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    res.send(`<!doctype html>${ReactDOM.renderToString(<TestHTML assets={webpackIsomorphicTools.assets()} state={store} />)}`);
  }

  match({
    history,
    routes: routes(store),
    location: req.url
  }, (error, redirect, props) => {
    if (error) {
      res.status(500).send(error.message);
      hydrateOnClient();
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

        /* if (process.env.NODE_ENV == 'development') { */

          /* const assets = webpackIsomorphicTools.assets(); */
          /* res.status(200).send(renderDevHTML({
           *   state,
           *   assets
           * })); */

        /* } else if (process.env.NODE_ENV == 'production') { */

        //const html = renderToString(rootComponent);
          /* res.status(200).send(renderApplication({
           *   state,
           *   html
           * })); */

        //}
        res.status(200).send(`<!doctype html>${ReactDOM.renderToStaticMarkup(<Default assets={webpackIsomorphicTools.assets()} component={rootComponent} state={state} />)}`);
      })

      /* renderToString(rootComponent) */
      store.close();

    } else {
      res.status(404).send('Not found');
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Server listening on port ${port}!`);
  }
});
