import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import logo from "./images/demo2_logo.png";
import {
    Button,
    Navbar,
    Container,
    Nav,
    Row,
    Col,
    Tab,
    NavDropdown,
    Form,
    InputGroup
  } from "react-bootstrap";
function Header(){
    return(
        <>
         <header>
        <div className="navbar_fix">
          <Navbar className="Navbar" expand="lg">
            <Container>
              <Navbar.Brand href="#">
                <img src={logo}></img>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="navbar_set">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "310px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1" className="">
                    Features
                  </Nav.Link>
                  <Nav.Link href="#">Samples</Nav.Link>
                  <Nav.Link href="#">Chapters</Nav.Link>
                  <Nav.Link href="#">Reviews</Nav.Link>
                  <Nav.Link href="#">Prices</Nav.Link>
                  <Nav.Link href="#">Blog</Nav.Link>
                </Nav>
                <Form>
                  <Button className="btn-primary">Order Now</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
        </>
    )
}
export default Header;