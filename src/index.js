import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Main from './components/Main'
import History from './components/History'
import Dances from './components/Dances'
import Dancers from './components/Dancers'
import Photos from './components/Photos'
import News from './components/News'
import Home from './components/Home'
import './styles/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="history" component={History} />
      <Route path="dances" component={Dances}/>
      <Route path="dancers" component={Dancers}/>
      <Route path="photos" component={Photos}/>
      <Route path="news" component={News}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);

