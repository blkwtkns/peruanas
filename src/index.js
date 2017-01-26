// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import Main from './Main/Main'
import Home from './Home/Home'
import News from './News/News'
import History from './History/History'
import Dances from './Dances/Dances'
import Dancers from './Dancers/Dancers'
import Photos from './Photos/Photos'
import Contact from './Contact/Contact'
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

