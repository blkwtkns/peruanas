import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
/* import './../styles/HistCarousel.css' */
/* import gazers from './../assets/dancers-gaze.jpg';
 * import bow from './../assets/foto8.jpg';
 * import bigSmile from './../assets/foto21.jpg'; */


const HistCarousel = () => (
  <Carousel className="HistCarousel">
    <Carousel.Item>
      <Image src={ process.env.WEBPACK ? require('./../assets/dancers-gaze.jpg') : './assets/dancers-gaze.jpg' } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ process.env.WEBPACK ? require('./../assets/foto8.jpg') : './assets/foto8.jpg'  } responsive/>
    </Carousel.Item>
    <Carousel.Item>
      <Image src={ process.env.WEBPACK ? require('./../assets/foto21.jpg') : './assets/foto21.jpg'  } responsive/>
    </Carousel.Item>
  </Carousel>
);

export default HistCarousel;
