// ./src/components/Dancers.js
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
/* import DancersCarousel from './DancersCarousel'; */
import ImageCarousel from '../ImageCarousel';
import { dancers } from '../../constants/photoState';


export default (props) => (
    <ImageCarousel images={dancers}/>
);

