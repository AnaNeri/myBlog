import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

// Toggle always showing becasue Navbar expand default is xxl
// collapseOnSelect expand="xxl" bg="light" variant="light" sticky="top"

function Nav1() {
  return (
    <>
    <Navbar collapseOnSelect expand="xxl" variant="dark" sticky="top">
      <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/about">About me</Nav.Link>
          <Nav.Link href="/publications">Publications</Nav.Link>
          <Nav.Link href="/cv">CV</Nav.Link>
          <Nav.Link href="/teaching">Teaching</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Nav1;
