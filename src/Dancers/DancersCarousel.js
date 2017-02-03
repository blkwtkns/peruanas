import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
const gazers = require('./../assets/dancers-gaze.jpg');
const bow = require('./../assets/foto8.jpg');
const bigSmile = require('./../assets/foto21.jpg');


const DancersCarousel = () => (
  <Carousel className="DancersCarousel">
    <Carousel.Item>
      <Image src={ gazers } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ bow } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ bigsmile } responsive/>
    </Carousel.Item>
  </Carousel>
);

export default DancersCarousel;
