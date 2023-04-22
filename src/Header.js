import React from "react";
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-light navbar-light py-3 px-5 px-5 fs-4" expand="lg">
      <Navbar.Brand href="index.html">
        <span className="fw-bolder text-primary fs-4">Muhammad Irfan</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <Nav.Item>
            <Nav.Link href="index.html">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="resume.html">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="projects.html">Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="contact.html">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;