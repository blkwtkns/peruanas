// ./src/components/Main.js
import React, {
  Component
} from 'react';
import {
  Navbar,
  NavItem,
  MenuItem,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Link
} from 'react-router';
import './../styles/Main.css'

class Main extends Component {
  render() {
    return (
      <section>
        <Navbar collapseOnSelect fluid fixedTop>
          <Navbar.Header>
            <Navbar.Brand><Link to="/">RaicesPeruanas</Link></Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullLeft>
              <LinkContainer to="/"><NavItem eventKey={1} href="#">Home</NavItem></LinkContainer>
              <LinkContainer to="history"><NavItem eventKey={2} href="#">History</NavItem></LinkContainer>
              <LinkContainer to="about"><NavItem eventKey={3} href="#">About</NavItem></LinkContainer>
              <LinkContainer to="dances"><NavItem eventKey={4} href="#">Dances</NavItem></LinkContainer>
              <LinkContainer to="photos"><NavItem eventKey={5} href="#">Photos</NavItem></LinkContainer>
              <LinkContainer to="news"><NavItem eventKey={6} href="#">News</NavItem></LinkContainer>
              <LinkContainer to="dancers"><NavItem eventKey={7} href="#">Dancers</NavItem></LinkContainer>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Contact</NavItem>
              <NavDropdown eventKey={2} title="Menu" id="basic-nav-dropdown">
                <LinkContainer to="/"><MenuItem eventKey={2.1}>Home</MenuItem></LinkContainer>
                <LinkContainer to="history"><MenuItem eventKey={2.2}>History</MenuItem></LinkContainer>
                <LinkContainer to="about"><MenuItem eventKey={2.3}>About</MenuItem></LinkContainer>

                <LinkContainer to="dances"><MenuItem eventKey={2.4}>Dances</MenuItem></LinkContainer>
                <LinkContainer to="photos"><MenuItem eventKey={2.5}>Photos</MenuItem></LinkContainer>
                <LinkContainer to="news"><MenuItem eventKey={2.6}>News</MenuItem></LinkContainer>
                <LinkContainer to="dancers"><MenuItem eventKey={2.7}>Dancers</MenuItem></LinkContainer>
                <MenuItem divider />
                <MenuItem eventKey={2.8}>Contact</MenuItem>
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
