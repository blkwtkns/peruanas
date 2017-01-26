// ./src/components/Photos.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import PhotosCarousel from './PhotosCarousel';
/* import './../styles/Photos.css'; */


const Photos = () => (

  <Jumbotron className="Dancers">
    <PhotosCarousel />
  </Jumbotron>
      
);

export default Photos;
