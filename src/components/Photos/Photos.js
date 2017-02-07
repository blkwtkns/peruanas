// ./src/components/Photos.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/* import ImageCarousel from '../ImageCarousel'; */
import { photos } from '../../constants/photoState';
import Gallery from '../GridGallery';


const Photos = (props) => (

  <Jumbotron className="Dancers">
    <Gallery clName={'PhotoGallery'} images={photos} />
    {/* <ImageCarousel clName={'PhotosCarousel'} images={photos} /> */}
  </Jumbotron>
      
);

export default Photos;
