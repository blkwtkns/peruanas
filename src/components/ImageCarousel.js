import React from 'react';
import { Jumbotron, Carousel, Image } from 'react-bootstrap';

    // <div className={'jumboCarousel ' + props.clName}> 
  // </div>
export default (props) => {
  return (
      <Carousel className={'ImageCarousel'}>
        { 
          props.images.map((pic, i) => {
          return <Carousel.Item key={i}><Image src={pic} key={i} /></Carousel.Item>
          }) 
        }
      </Carousel>
  );
}
