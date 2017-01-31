import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import HTMLDocument, { doctype } from 'server/views/HTMLDocument'
/* import { createStore } from 'redux'; */
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import { match, RouterContext } from 'react-router';
/* import rootReducer from './rootReducer'; */
import rootSaga from './sagas'
import routes from './routes';

function renderApplication(props){
  return doctype + renderToStaticMarkup(<HTMLDocument { ...props} />);
}

export default (req, res) => {
  const store = configureStore();

	match({ routes, location: req.url }, (error, redirect, props) => {
		if(error) {
			res.status(500).send(error.message);
		} else if(redirect) {
			res.redirect(302, redirect.pathname + redirect.search);
		} else if(props) {
      const rootComponent = (
          <Provider store={store}>
            <RouterContext {...props}/>
          </Provider>
        );

			if(process.env.NODE_ENV == 'development') {
        

        store.runSaga(rootSaga).done.then(()=>{
          const state = store.getState();
          const html = renderToString(rootComponent);
        })

				res.status(200).send(renderApplication({state, html}));

			} else if(process.env.NODE_ENV == 'production') {

				res.status(200).send(renderToString(rootComponent));
			}
		} else {
			res.status(404).send('Not found');
		}
	});
};
