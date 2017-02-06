// ./src/components/Dancers.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/* import DancersCarousel from './DancersCarousel'; */
import ImageCarousel from '../components/ImageCarousel';
import { dancers } from '../constants/photoState';


const Dancers = (props) => (

  <Jumbotron className="Dancers">
    <ImageCarousel clName={'DancersCarousel'} images={dancers}/>
  </Jumbotron>
      
);

export default Dancers;
