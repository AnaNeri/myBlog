import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

// Toggle always showing becasue Navbar expand default is xxl

function Nav1() {
  return (
    <>
    <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark" sticky="top">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/about">About me</Nav.Link>
          <Nav.Link href="/publications">Publications</Nav.Link>
          <Nav.Link href="/cv">CV</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default Nav1;
