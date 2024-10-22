import React from "react";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import logo from '../Components/Image/Logo.jpeg';
function Navbari() {
  return (
    <Navbar expand="lg" collapseOnSelect >
      <Navbar.Brand>
        <img
          src={logo}
          width="180"
          height="80"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="justify-content-end" style={{ width: "95%" }}>
          <Nav.Item>
            <Button variant="outline-info">
              <Nav.Link href="/">Home</Nav.Link>
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button variant="outline-info">
              <NavDropdown title="Products">
                <NavDropdown.Item>Vegetables</NavDropdown.Item>
                <NavDropdown.Item>Fruits</NavDropdown.Item>
                <NavDropdown.Item>Spices</NavDropdown.Item>
                <NavDropdown.Item>Wheat Atta</NavDropdown.Item>
                <NavDropdown.Item>Biscuits & Cookies</NavDropdown.Item>
                <NavDropdown.Item>Personal Care</NavDropdown.Item>
                <NavDropdown.Item>Stationary & Paper</NavDropdown.Item>
                <NavDropdown.Item>Agarbati</NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button variant="outline-info">
              <Nav.Link>Blogs</Nav.Link>
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button variant="outline-info">
              {/* <NavDropdown title="Our Company">
                <NavDropdown.Item>About</NavDropdown.Item>
                <NavDropdown.Item>Accreditation</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="/Aboutus">About us</Nav.Link>
            </Button>
          </Nav.Item>

          <Nav.Item>
            <Button variant="outline-info">
              <Nav.Link>Contact Us</Nav.Link>
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbari;
