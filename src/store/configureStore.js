import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger'
import rootReducer from '../rootReducer'; 
// import rootSaga from '../sagas/rootSaga';
// import contactReducer from '../Contact/contactReducer'; 


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if(typeof window !== 'undefined' && window.document){
  middleware.push(createLogger({collapsed: true}));
}
// mount it to store
// NB only single reducer used since there is only one
// current reducer
const configureStore = (initialState) => {
  // saga middleware

  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
    );
  
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;

};

export default configureStore;
