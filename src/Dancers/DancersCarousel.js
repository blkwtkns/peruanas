import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
/* import './../styles/DancersCarousel.css' */
import gazers from './../assets/dancers-gaze.jpg';
import bow from './../assets/foto8.jpg';
import bigSmile from './../assets/foto21.jpg';


const DancersCarousel = () => (
  <Carousel className="DancersCarousel">
    <Carousel.Item>
      <Image src={ gazers } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ bow } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ bigSmile } responsive/>
    </Carousel.Item>
  </Carousel>
);

export default DancersCarousel;
