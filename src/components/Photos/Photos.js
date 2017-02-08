// ./src/components/Photos.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/* import ImageCarousel from '../ImageCarousel'; */
import { photos } from '../../constants/photoState';
import Gallery from '../GridGallery';


const Photos = (props) => (

  <div className='photos'>
    <Jumbotron>
      <Gallery clName={'PhotoGallery'} images={photos} />
      {/* <ImageCarousel clName={'PhotosCarousel'} images={photos} /> */}
    </Jumbotron>
  </div>

);

export default Photos;
