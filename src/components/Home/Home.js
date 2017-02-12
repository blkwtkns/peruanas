// ./src/components/Home.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import About from './About';
import { images } from '../../constants/photoState';
import ImageCarousel from '../ImageCarousel';
import Intro from './Intro';
import Separator from '../SepComponent';
/* import Gallery from '../LightGallery'; */
/* import Gallery from '../GridGallery'; */

const Home = (props) => (
  <section>
      <Intro />
       <ImageCarousel clName={'ImageCarousel'} images={ images }/>
      {/* <Gallery clName={'HomeGallery'} images={images} /> */}
      <Separator clName={'aboutSeparator'} />
      <About />
  </section>
);

export default Home;
