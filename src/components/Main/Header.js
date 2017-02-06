// ./src/Main/Header.js
import React, {
  Component 
} from 'react';
import {
  Navbar,
  Nav
} from 'react-bootstrap';
import NavBrand from './NavBrand';
import RouteLinks from './RouteLinks';
import SocialLinks from './SocialLinks';

/* class Header extends Component {
 *   render(){ */

const Header = (props) => {
  return (
    <Navbar fluid fixedTop collapseOnSelect className="navMain">
      <NavBrand />
      <Navbar.Collapse>
        <Nav pullRight className="links">
          <RouteLinks />
          <SocialLinks />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
