// ./src/components/Home.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import About from './About';
import { images } from '../../constants/photoState';
import ImageCarousel from '../ImageCarousel';
/* import Gallery from '../LightGallery'; */
/* import Gallery from '../GridGallery'; */

const Home = (props) => (
  <section>
    <Jumbotron className="home">
       <ImageCarousel clName={'HomeCarousel'} images={ images }/>
      {/* <Gallery clName={'HomeGallery'} images={images} /> */}
    </Jumbotron>
    <About />
  </section>
);

export default Home;
