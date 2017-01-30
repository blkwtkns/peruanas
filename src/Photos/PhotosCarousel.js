import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
/* import './../styles/PhotosCarousel.css' */
/* import gazers from './../assets/dancers-gaze.jpg';
 * import bow from './../assets/foto8.jpg';
 * import bigSmile from './../assets/foto21.jpg'; */


const PhotosCarousel = () => (
  <Carousel className="PhotosCarousel">
    <Carousel.Item>
      <Image src={ require('./../assets/dancers-gaze.jpg') } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ require('./../assets/foto8.jpg') } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ require('./../assets/foto21.jpg') } responsive/>
    </Carousel.Item>
  </Carousel>
);

export default PhotosCarousel;
