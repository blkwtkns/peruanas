import React from 'react';
import { Route } from 'react-router';

import Main from './components/Main/Main';
import Home from './components/Home/Home';
import News from './components/News/News';
import History from './components/History/History';
import Dances from './components/Dances/Dances';
import Dancers from './components/Dancers/Dancers';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';
/* import NotFound from './NotFound'; */

import styles from './components/Main/main.css';

export default (store) => {
  return (
    <Route component={Main}>
      <Route path="/" component={Home}/>
      <Route path="news" component={News}/>
      <Route path="history" component={History} />
      <Route path="dances" component={Dances}/>
      <Route path="dancers" component={Dancers} />
      <Route path="photos" component={Photos} />
      <Route path="contact" component={Contact}/>
    </Route>
  )
};
