// ./src/components/Photos.js
import React from 'react';
import { PageHeader } from 'react-bootstrap';
/* import ImageCarousel from '../ImageCarousel'; */
import { photos } from '../../constants/photoState';
import Gallery from 'react-grid-gallery';

const Photos = (props) => {

  return (
    <div className='photos'>
      {/* <Jumbotron> */}
        <div className='container'>
          <PageHeader> Photos Peruanos </PageHeader>
          <Gallery className={'PhotoGallery'} 
            images={photos.map(pic => {
              return {
                src: pic,
                thumbnail: pic,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
              }
            })} 
          />
        </div>
        {/* <ImageCarousel clName={'PhotosCarousel'} images={photos} /> */}
        {/* </Jumbotron> */}
    </div>

  );
}

export default Photos;
