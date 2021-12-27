import React from "react";
import {NavLink as RouterNavLink } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MainNav = () => (

  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
    >
      Home
    </Nav.Link>

    <Nav.Link
      as={RouterNavLink}
      to="/about"
    >
      About
    </Nav.Link>

  </Nav>
);


const NavBar = () => {

  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
