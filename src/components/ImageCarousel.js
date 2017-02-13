import React from 'react';
import { Jumbotron, Carousel, Image } from 'react-bootstrap';

const ImageCarousel = (props) => {
  return (
    <div className={'jumboCarousel ' + props.clName}>
      <Jumbotron>
      <Carousel className={'ImageCarousel'}>

        { props.images.map((pic, i) => {
          return <Carousel.Item key={i}><Image src={pic} key={i} /></Carousel.Item>
        }) }

      </Carousel>
    </Jumbotron>
  </div>
  );
}
export default ImageCarousel;
