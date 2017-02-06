import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import { dancers } from '../constants/photoState'

const DancersCarousel = (props) => {

  return (
    <Carousel key="dancersCar" className="DancersCarousel">

      { dancers.map((pic, i) => {
        return <Carousel.Item key={i}><Image src={pic} key={i} responsive/></Carousel.Item>
      }) }

    </Carousel>
  );

}
export default DancersCarousel;
