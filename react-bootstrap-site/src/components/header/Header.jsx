import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";

import "./header.css";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="navbar-test position-absolute w-100">
        <Container className="test-lang border border-white rounded bg-light-subtle py-1">
          <Navbar.Brand href="#home">Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id=" basic-navbar-nav" className="collapse">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="mx-1">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="mx-1">
                About
              </Nav.Link>
              <Nav.Link href="#home" className="mx-1">
                Projects
              </Nav.Link>
              <Nav.Link href="#home" className="mx-1">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </Container>
      </Navbar>

      <div className="hero-image"></div>
    </div>
  );
};

export default Header;
