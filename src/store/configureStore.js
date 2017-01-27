import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../rootReducer';
import rootSaga from '../sagas/rootSaga';


// mount it to store
const configureStore = () => {
  // saga middleware
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };

}; 

export default configureStore;
