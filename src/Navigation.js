import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css'; // Import your custom CSS file

function Navigation() {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand href="/">Sigmaware</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto d-flex justify-content-right">
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/About" className="nav-link">About</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="nav-link">Contact Us</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/Services/Projects">Projects</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Services/Maintenance">Maintenance</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/Services/ITmanagement">IT Management</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
