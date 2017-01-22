// ./src/components/Main.js
import React, {
  Component
} from 'react';
import {
  Image,
  Navbar,
  NavItem,
  MenuItem,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import {
  // Link
// } from 'react-router';
import './../styles/Main.css';
import logo from './../assets/image1-small-23.png';

class Main extends Component {
  render() {
    return (
      <section>
        <Navbar collapseOnSelect fluid fixedTop>
          <Navbar.Header>
            {/*<Navbar.Brand>*/}
              <Nav pullLeft className="infos">
                <NavItem eventKey={1} href="#"><Image src={logo} height="25" width="25" responsive circle/></NavItem>
                <NavItem eventKey={2} href="#"><i className="fa fa-phone" aria-hidden="true"></i> Call 1(333)333-3333</NavItem>
                <NavItem eventKey={3} href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i> Mail: mail@example.com</NavItem>
              </Nav>
              <Nav pullRight className="socials">
                <NavItem eventKey={1} className="fa fa-twitter fa-2x" href="#"></NavItem>
                <NavItem eventKey={2} className="fa fa-youtube fa-2x" href="#"></NavItem>
                <NavItem eventKey={3} className="fa fa-facebook fa-2x" href="#"></NavItem>
              </Nav>
              {/*</Navbar.Brand>*/}
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft disabled>
              <LinkContainer to="/"><NavItem eventKey={1} href="#">RaicesPeruanas</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
              {/*<LinkContainer to="/"><NavItem eventKey={1} href="#">Home</NavItem></LinkContainer>*/}
              <LinkContainer to="history"><NavItem eventKey={1} href="#">History</NavItem></LinkContainer>
              <LinkContainer to="about"><NavItem eventKey={2} href="#">About</NavItem></LinkContainer>
              <LinkContainer to="dances"><NavItem eventKey={3} href="#">Dances</NavItem></LinkContainer>
              <LinkContainer to="photos"><NavItem eventKey={4} href="#">Photos</NavItem></LinkContainer>
              <LinkContainer to="news"><NavItem eventKey={5} href="#">News</NavItem></LinkContainer>
              <LinkContainer to="dancers"><NavItem eventKey={6} href="#">Dancers</NavItem></LinkContainer>
              {/*<LinkContainer to="contact"><NavItem eventKey={7} href="#">Contact</NavItem></LinkContainer>*/}
              <NavDropdown eventKey={7} title="Menu" id="basic-nav-dropdown">
                <LinkContainer to="/"><MenuItem eventKey={7.1}>Home</MenuItem></LinkContainer>
                <LinkContainer to="history"><MenuItem eventKey={7.2}>History</MenuItem></LinkContainer>
                <LinkContainer to="about"><MenuItem eventKey={7.3}>About</MenuItem></LinkContainer>

                <LinkContainer to="dances"><MenuItem eventKey={7.4}>Dances</MenuItem></LinkContainer>
                <LinkContainer to="photos"><MenuItem eventKey={7.5}>Photos</MenuItem></LinkContainer>
                <LinkContainer to="news"><MenuItem eventKey={7.6}>News</MenuItem></LinkContainer>
                <LinkContainer to="dancers"><MenuItem eventKey={7.7}>Dancers</MenuItem></LinkContainer>
                <MenuItem divider />
                <MenuItem eventKey={7.8}>Contact</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <section className="container-fluid">
          {this.props.children}
        </section>
      </section>
    )
  }
}

export default Main;
