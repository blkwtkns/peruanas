// ./src/components/Main.js
import React, {Component} from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router';
import './../styles/Main.css'

class Main extends Component {
  render(){
    return (
            <div>
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">RaicesPeruanas</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to="/">Home</Link></NavItem>
        <NavItem eventKey={2} href="#"><Link to="/history">History</Link></NavItem>
        <NavItem eventKey={3} href="#"><Link to="/about">About</Link></NavItem>
        <NavItem eventKey={4} href="#"><Link to="/dances">Dances</Link></NavItem>
        <NavItem eventKey={5} href="#"><Link to="/photos">Photos</Link></NavItem>
        <NavItem eventKey={6} href="#"><Link to="/news">News</Link></NavItem>
        <NavItem eventKey={7} href="#"><Link to="/dancers">Dancers</Link></NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={2.1}><Link to="/">Home</Link></MenuItem>
          <MenuItem eventKey={2.2}><Link to="/history">History</Link></MenuItem>
          <MenuItem eventKey={2.3}><Link to="/about">About</Link></MenuItem>
          <MenuItem eventKey={2.4}><Link to="/dances">Dances</Link></MenuItem>
          <MenuItem eventKey={2.5}><Link to="/photos">Photos</Link></MenuItem>
          <MenuItem eventKey={2.6}><Link to="/news">News</Link></MenuItem>
          <MenuItem eventKey={2.7}><Link to="/dancers">Dancers</Link></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={2.8}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
)
}
}

export default Main;
