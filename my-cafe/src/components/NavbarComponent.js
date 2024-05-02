import React from 'react';
import { Navbar, Nav, Container, Form, Button , FormControl, NavDropdown} from 'react-bootstrap';
import backgroundImage from './background.jpeg'; //
import './NavbarStyle.css';

const NavbarComponent=() => {
  return (
    <Navbar className="justify-content-end" expand="lg" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Navbar.Brand href="#home">Microdata Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
