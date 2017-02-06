import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { photos } from '../constants/photoState';


const PhotosCarousel = (props) => {
  return (
    <Carousel className="PhotosCarousel">

      { photos.map((pic, i) => {
        return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
      }) }

    </Carousel>
  );
}
export default PhotosCarousel;
