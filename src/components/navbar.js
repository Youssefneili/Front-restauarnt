import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "LavenderBlush" }}
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <Link
                  to="./menu"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Articles
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link
                  to="./product"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Products
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link>
              <Link
                to="./info"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About us
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                to="./basket"
                style={{
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <LuShoppingCart style={{ marginRight: "5px" }} />
                Basket
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
