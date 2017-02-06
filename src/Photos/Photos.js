// ./src/components/Photos.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import ImageCarousel from '../components/ImageCarousel';
import { photos } from '../constants/photoState';


const Photos = (props) => (

  <Jumbotron className="Dancers">
    <ImageCarousel clName={'PhotosCarousel'} images={photos} />
  </Jumbotron>
      
);

export default Photos;
