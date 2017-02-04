// ./src/components/Photos.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import PhotosCarousel from './PhotosCarousel';


const Photos = () => (

  <Jumbotron className="Dancers">
    <PhotosCarousel />
  </Jumbotron>
      
);

export default Photos;
