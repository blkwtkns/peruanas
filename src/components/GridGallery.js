import React from 'react';
import Gallery from 'react-grid-gallery';

export default (props) => {
  const images = props.images.map(pic => {
    return {
      src: pic,
      thumbnail: pic,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    }
  })

  return (
    <div className={props.clName}>
      <Gallery images={images} />
    </div>
  );

}
