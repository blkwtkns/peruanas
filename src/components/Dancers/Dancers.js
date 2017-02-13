// ./src/components/Dancers.js
import React from 'react';
import { Jumbotron, PageHeader } from 'react-bootstrap';
/* import DancersCarousel from './DancersCarousel'; */
import ImageCarousel from '../ImageCarousel';
import { dancers } from '../../constants/photoState';


export default (props) => (
  <div className='dancers'>
    <PageHeader>Dancers of Raices Peruanas</PageHeader>
    <ImageCarousel clName={'DancersCarousel'} images={dancers}/>
  </div>
);

