import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { history } from '../constants/photoState';

const HistCarousel = (props) => {

  /* componentDidMount(){
   *   const [a,b,c,d,e,f,g,h,i,j,k,l,m] = history;
   *   this.photoItems = [a,b,c,d,e,f,g,h,i,j,k,l,m].map(pic => {
   *     return pic;
   *   })
   *   
   * } */

  return( <Carousel className="HistCarousel">

    { history.map((pic, i) => {
      return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
    }) }

  </Carousel>
  )

}

export default HistCarousel;
