import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
/* import rootReducer from '../rootReducer'; */
import rootSaga from '../sagas/rootSaga';
/* import contactReducer from '../Contact/contactReducer'; */


// mount it to store
// NB only single reducer used since there is only one
// current reducer
const configureStore = (reducer) => {
  // saga middleware
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(reducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };

};

export default configureStore;
