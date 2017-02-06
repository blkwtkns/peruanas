import React from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ImageCarousel = (props) => {
  return (
    <Carousel className={props.clName}>

      { props.images.map((pic, i) => {
        return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
      }) }

    </Carousel>
  );
}
export default ImageCarousel;
