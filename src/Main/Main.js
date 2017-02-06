// ./src/Main/Main.js
import React, {Component} from 'react';
/* import {
 *   connect
 * } from 'react-redux'; */
import Footer from './Footer';
import Header from './Header'

const Main = (props) => {

  /* const childrenWithProps = React.Children.map(this.props.children,
   *       (child) => React.cloneElement(child, {pics: this.props.pics})
   *     ); */

  return (
    <section>
      <Header />
      <div className="container-fluid">
        { props.children }
      </div>
      <Footer />
    </section>
  );
} 


/* export default connect( ({state}) => ({
 *     pics: state.shared.pics
 *   })
 *   )(Main); */

export default Main;
