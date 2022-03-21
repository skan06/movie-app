import React from "react";
import {Navbar,Container,Nav} from "react-bootstrap"
import logo from "../Components/Image/logo.png"

export default function Nvbr() {
  return (
    <div className="nvb">
          <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="70"
          height="35"
          className="d-inline-block align-top"
        />{' '}
      MovieX
      </Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="Movies">Movies</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>
  )
}
