// ./src/components/Home.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/* import './../styles/Home.css'; */
import About from './About';
import HomeCarousel from './HomeCarousel';


const Home = () => (
  <section>
    <Jumbotron className="home">
      <HomeCarousel />
    </Jumbotron>
    <About />
  </section>
);

export default Home;
