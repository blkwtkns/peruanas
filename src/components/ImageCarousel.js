import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ImageCarousel = (props) => {
  return (
    <Carousel className={'ImageCarousel'}>

      { props.images.map((pic, i) => {
        return <Carousel.Item key={i}><Image src={pic} key={i} /></Carousel.Item>
      }) }

    </Carousel>
  );
}
export default ImageCarousel;
