import React from 'react';
import {
  Image,
  Navbar,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const logo = require('../assets/image1-small-23.png'); 

/* class Header extends Component { */
const NavBrand = (props) => {

  return (
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/">
          <a href="#">
            <Image className="raicesLogo" src={ logo } circle/> 
            <span className='title'>RaicesPeruanas</span>
          </a>
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  )
};

export default NavBrand;
