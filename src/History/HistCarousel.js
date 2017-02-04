import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const gazers = require('./../assets/dancers-gaze.jpg');
const bow = require('./../assets/foto8.jpg');
const bigSmile = require('./../assets/foto21.jpg');


const HistCarousel = (props) => {
  
  const HistoryItems = [gazers, bow, bigSmile].map((pic, i) => {
    return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
  })

  return (
  <Carousel className="HistCarousel">
    {HistoryItems} 
  </Carousel>
  );
}

export default HistCarousel;
