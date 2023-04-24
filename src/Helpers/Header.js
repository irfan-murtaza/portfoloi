import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-white navbar-light py-3 px-5 px-5 fs-4" expand="lg">
      <Navbar.Brand href="index.html">
        <span className="fw-bolder text-primary fs-4">Irfan Murtaza</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <Nav.Item>
            <NavLink exact to="/" className="nav-link">Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact to="/resume" className="nav-link">Resume</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact to="/project" className="nav-link">Projects</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;