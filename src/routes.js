import React from 'react';
import { Route } from 'react-router';

import Main from './Main/Main'
import Home from './Home/Home'
import News from './News/News'
import History from './History/History'
import Dances from './Dances/Dances'
import Dancers from './Dancers/Dancers'
import Photos from './Photos/Photos'
import Contact from './Contact/Contact'
/* import NotFound from './NotFound'; */

import styles from './Main/main.css';
/* import bigSmile from './assets/dancers-gaze.jpg'
 * import gazers from './assets/foto8.jpg'
 * import gangsta from './assets/foto21.jpg'
 * import logo from './assets/image1-small-23.png' */
/* <Route path="*" component={NotFound} status={404} /> */

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
