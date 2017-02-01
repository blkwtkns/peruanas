// ./src/index.js
import React from 'react';
import {
  render
} from 'react-dom';
import {
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


/* const store = configureStore(rootReducer); */

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga)
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('mount')
);

if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(require('./rootReducer').default);
  });
}
