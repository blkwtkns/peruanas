import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Main from './components/Main'
import Home from './components/Home'
import News from './components/News'
import History from './components/History'
import Dances from './components/Dances'
import Dancers from './components/Dancers'
import Photos from './components/Photos'
import Contact from './components/Contact'
import './styles/index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="news" component={News}/>
      <Route path="history" component={History} />
      <Route path="dances" component={Dances}/>
      <Route path="dancers" component={Dancers}/>
      <Route path="photos" component={Photos}/>
      <Route path="contact" component={Contact}/>}
    </Route>
  </Router>
  ), document.getElementById('root')
);

