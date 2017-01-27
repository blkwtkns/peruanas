// ./src/Main/Header.js
import React, {
  Component 
} from 'react';
import {
  Image,
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './../assets/image1-small-23.png'; 
/* import './../styles/Main.css'; */

class Header extends Component {
  render(){
    return (

      <Navbar fluid fixedTop collapseOnSelect className="navMain">
        <Navbar.Header>
          <Navbar.Brand>
            <Image className="raicesLogo" src={logo} circle/>
            <span className='title'>RaicesPeruanas</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight className="links">
            <LinkContainer to="/"><NavItem eventKey={1} href="#" >Home</NavItem></LinkContainer>
            <LinkContainer to="news"><NavItem eventKey={2} href="#">News</NavItem></LinkContainer>
            <LinkContainer to="dances"><NavItem eventKey={3} href="#">Dances</NavItem></LinkContainer>
            <LinkContainer to="photos"><NavItem eventKey={4} href="#">Photos</NavItem></LinkContainer>
            <LinkContainer to="history"><NavItem eventKey={5} href="#">History</NavItem></LinkContainer>
            <LinkContainer to="dancers"><NavItem eventKey={6} href="#">Dancers</NavItem></LinkContainer>
            <LinkContainer to="contact"><NavItem eventKey={7} href="#">Contact</NavItem></LinkContainer>
            <a className="fa fa-phone fa-2x socials" href="tel:6266640944"></a>
            <a className="fa fa-envelope-o fa-2x socials" href="mailto:raicesperuanas@hotmail.com"></a>
            <a className="fa fa-twitter fa-2x socials" href="#"></a>
            <a className="fa fa-youtube fa-2x socials" href="http://www.youtube.com/user/RaicesPeruanas/videos"></a>
            <a className="fa fa-facebook fa-2x socials" href="https://www.facebook.com/danzas.peruanas"></a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default Header;