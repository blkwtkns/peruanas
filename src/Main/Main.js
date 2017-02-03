// ./src/Main/Main.js
import React, {Component} from 'react';

import Footer from './Footer';
import Header from './Header'

if (process.env.WEBPACK) require('./main.css');
/* require('./main.scss'); */
/* import './main.scss'; */

class Main extends Component {

  render(){
    return (
      <section>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
        <Footer />
      </section>
    );
  }
}

export default Main;
