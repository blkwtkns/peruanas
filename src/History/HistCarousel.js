import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
/* const history = require('../constants/photoState').history; */
import { history } from '../constants/photoState';

/* const gazers = require('./../assets/history/girl_scanned_01s.jpg');  */
/* const bow = require('./../assets/history/girls_scanned_01s.jpg');  */
/* const bigSmile = require('./../assets/history/girls_scanned_02s.jpg');  */

// you idiot use componentDidMount lol
const HistCarousel = (props) => {

  return (() => {
    const [a,b,c,d,e,f,g,h,i,j,k,l,m] = require('../constants/photoState').history;
    return Promise.resolve([a,b,c,d,e,f,g,h,i,j,k,l,m]);
  })()
    .then( items => {
      return items.map((pic, i) => {
        return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
      })
    })

    .then( mapped => {
      console.log('mapped', mapped)

      return( <Carousel className="HistCarousel">
        {mapped}
      </Carousel>
      )

    })


  /* const HistoryItems = [gazers, bow, bigSmile].map((pic, i) => {
   *   return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
   * }) */

  /* return (
   *   <Carousel className="HistCarousel">
   *     { createFragment(HistoryItems) } 
   *   </Carousel>
   * ); */
}

export default HistCarousel;
