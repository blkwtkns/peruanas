// ./src/Main/Main.js
import React, {Component} from 'react';
import {
  connect
} from 'react-redux';
import Footer from './Footer';
import Header from './Header'

/* if (process.env.WEBPACK) require('./main.css'); */
/* require('./main.scss'); */
/* import styles from './main.css'; */


class Main extends Component {

  render(){
    /* const childrenWithProps = React.Children.map(this.props.children,
     *       (child) => React.cloneElement(child, {pics: this.props.pics})
     *     ); */

    return (
      <section>
        <Header />
        <div className="container-fluid">
          { this.props.children }
        </div>
        <Footer />
      </section>
    );
  } 
}
/* export default Main; */

export default connect( ({state}) => ({
    pics: state.shared.pics
  })
  )(Main);
