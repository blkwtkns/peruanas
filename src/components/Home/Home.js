// ./src/components/Home.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import About from './About';
import { images } from '../../constants/photoState';
import ImageCarousel from '../ImageCarousel';

const Home = (props) => (
  <section>
    <Jumbotron className="home">
      <ImageCarousel clName={'HomeCarousel'} images={ images }/>
    </Jumbotron>
    <About />
  </section>
);

export default Home;
