import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const gazers = require('./../assets/dancers-gaze.jpg');
const bow = require('./../assets/foto8.jpg');
const bigSmile = require('./../assets/foto21.jpg');


const HistCarousel = (props) => {
  
  const carouselItems = [gazers, bow, bigSmile].map(pic => {
    return <Carousel.Item><Image src={pic} responsive/></Carousel.Item>
  })

  return (
  <Carousel className="HistCarousel">
    {carouselItems} 
  </Carousel>
  );
}

export default HistCarousel;
