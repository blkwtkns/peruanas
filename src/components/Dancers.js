// ./src/components/Dancers.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import DancersCarousel from './carousels/DancersCarousel';
import './../styles/Dancers.css';


const Dancers = () => (

  <Jumbotron className="Dancers">
    <DancersCarousel />
  </Jumbotron>
      
);

export default Dancers;
