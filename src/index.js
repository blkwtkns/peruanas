// ./src/index.js
import React from 'react';
import {
  render
} from 'react-dom';
import {
  match,
  Router,
  browserHistory
} from 'react-router';
import {
  Provider
} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './configureStore';
import rootReducer from './rootReducer'; 
import rootSaga from './sagas/rootSaga'
import routes from './routes';

/* console.log('window', window.__INITIAL_STATE__)  */

const store = configureStore(window.__INITIAL_STATE__);

if (process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(require('./rootReducer').default);
    });
  }

store.runSaga(rootSaga)
const history = syncHistoryWithStore(browserHistory, store);

match({history, routes}, (error, redirect, props) => {
  render(
    <Provider store={store}>
      <Router {...props} />
    </Provider>,
    document.getElementById('mount')
  );
})

